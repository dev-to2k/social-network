/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-empty */

import * as tf from '@tensorflow/tfjs';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import { imageShow, videoShow } from 'utils/mediaShow';
import { getDataApi } from 'utils/fetchData';
import uniqueArray from 'utils/uniqueArray';
import { GLOBALTYPES } from '../redux/actions/globalTypes';
import { POST_TYPES, createPost, updatePost } from '../redux/actions/postAction';
import imageClasses from '../utils/labels';

import Icons from './Icons';

function StatusModal() {
  const [location, setLocation] = useState(null);
  const [images, setImages] = useState([]);
  const [hashtags, setHashtags] = useState([]);
  const [stream, setStream] = useState(false);
  const [tracks, setTracks] = useState('');
  const [content, setContent] = useState('');
  const { auth, status, socket, homePosts } = useSelector((state) => state);
  const dispatch = useDispatch();
  const videoRef = useRef();
  const refCanvas = useRef();

  const readImageFile = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();

      reader.onload = () => resolve(reader.result);

      reader.readAsDataURL(file);
    });
  };

  const createHTMLImageElement = (imageSrc) => {
    return new Promise((resolve) => {
      const img = new Image();

      img.onload = () => resolve(img);

      img.src = imageSrc;
    });
  };

  const predict = async (imageFile) => {
    const model = await tf.loadLayersModel('http://127.0.0.1:5000/model/model.json');
    const imageSrc = await readImageFile(imageFile);
    const image = await createHTMLImageElement(imageSrc);
    const { predictedClass, confidence } = tf.tidy(() => {
      const tensorImg = tf.browser.fromPixels(image).resizeNearestNeighbor([180, 180]).toFloat().expandDims();
      const result = model.predict(tensorImg);

      const predictions = result.dataSync();
      const predictedIndex = result.as1D().argMax().dataSync()[0];

      const imageClass = imageClasses[predictedIndex];
      const prob = Math.round(predictions[predictedIndex] * 100);

      return { predictedClass: imageClass, confidence: prob };
    });
    return { predictedClass, confidence };
  };

  const generateHashtags = async (files) => {
    const tags = await Promise.all(
      files.map(async (file) => {
        return (await predict(file)).predictedClass;
      })
    );
    setHashtags(uniqueArray(tags));
  };

  const handleChangeImages = (e) => {
    const files = [...e.target.files];
    let err = '';
    const newImages = [];
    files.forEach(async (file) => {
      if (!file) err = 'The image does not exists!';
      if (file.size > 1024 * 1024 * 5) err = 'The image/video largest is 5mb.';
      return newImages.push(file);
    });

    if (err) dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err } });
    setImages([...images, ...newImages]);
    generateHashtags(files);
    return null;
  };

  const deleteImage = (index) => {
    const newArr = [...images];
    newArr.splice(index, 1);
    setImages(newArr);
  };

  const handleStream = () => {
    setStream(true);
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((mediaStream) => {
          videoRef.current.srcObject = mediaStream;
          videoRef.current.play();
          const track = mediaStream.getTracks();
          setTracks(track[0]);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleCapture = () => {
    const width = videoRef.current.clientWidth;
    const height = videoRef.current.clientHeight;

    refCanvas.current.setAttribute('width', width);
    refCanvas.current.setAttribute('height', height);

    const ctx = refCanvas.current.getContext('2d');
    ctx.drawImage(videoRef.current, 0, 0, width, height);
    const URL = refCanvas.current.toDataURL();
    setImages([...images, { camera: URL }]);
  };

  const handleStopStream = () => {
    tracks.stop();
    setStream(false);
  };

  async function getLocationInfo(latitude, longitude) {
    const APIkey = '4f580159ed6f417481b0c2dfb270c58f';
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${APIkey}`;
    await axios(url)
      .then((response) => response.data)
      .then((data) => {
        if (data.status.code === 200) {
          setLocation(data.results[0].formatted);
        } else {
          console.log('Reverse geolocation request failed.');
        }
      })
      .catch((error) => console.error(error));
  }
  function getLocationSuccess(pos) {
    const crd = pos.coords;
    getLocationInfo(crd.latitude, crd.longitude);
  }

  function getLocationErrors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  const handleGetLocation = (params) => {
    if (navigator.geolocation) {
      navigator.permissions.query({ name: 'geolocation' }).then(function (result) {
        if (result.state === 'granted') {
          navigator.geolocation.getCurrentPosition(getLocationSuccess, getLocationErrors, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          });
        } else if (result.state === 'prompt') {
          navigator.geolocation.getCurrentPosition(getLocationSuccess, getLocationErrors, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          });
        } else if (result.state === 'denied') {
        }
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (images.length === 0 && content === '' && location === '') {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: 'Add some thing to post.',
        },
      });
    }
    console.log({ content, images, location, hashtags });

    if (status.onEdit) {
      dispatch(updatePost({ content, images, location, hashtags, auth, status }));
    } else {
      dispatch(createPost({ content, images, location, hashtags, auth, socket }));
    }
    setContent('');
    setImages([]);
    if (tracks) tracks.stop();
    dispatch({ type: GLOBALTYPES.STATUS, payload: false });
    const res = await getDataApi(`posts?limit=${homePosts.page * 9}`, auth.token);

    dispatch({
      type: POST_TYPES.GET_POSTS,
      payload: {
        ...res.data,
        page: homePosts.page + 1,
      },
    });
  };

  useEffect(() => {
    if (status.onEdit) {
      setContent(status.content);
      setImages(status.images);
    }
  }, [status]);

  return (
    <div className="status_modal">
      <div className="status_wrap width-682 rounded-3 shadow bg-white p-3">
        <form onSubmit={handleSubmit}>
          <div className="header position-relative mb-3">
            <h4 className="text-center mb-0">Tạo bài viết</h4>
            <button
              type="button"
              className="position-absolute d-flex justify-content-center align-items-center btn btn-edit rounded-circle circle"
              onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: false })}
            >
              <span className="material-icons-outlined">close</span>
            </button>
          </div>
          <hr className="mt-2" />
          <div className="body mb-3">
            <div className="d-flex mb-3">
              <img src={auth.user.avatar} className="img-fluid rounded-circle circle me-2 img-cover" alt="avatar" />
              <span className="fw-600">{auth.user.fullname}</span>
            </div>
            {location && (
              <div className="location mb-3">
                <div className="location-text">{`tại ${location}`}</div>
                <button type="button" id="x" onClick={() => setLocation('')}>
                  X
                </button>
              </div>
            )}
            <div className="form-floating">
              <TextareaAutosize
                onChange={(e) => setContent(e.target.value)}
                value={content}
                placeholder="Bạn đang nghĩ gì?"
              />
            </div>
            {hashtags && (
              <div className="hashtags mb-3">
                {hashtags.map((hashtag) => {
                  return (
                    <div key={hashtag} className="hashtag">
                      <div className="hashtag-text">{`#${hashtag}`}</div>
                      <button
                        type="button"
                        id="x"
                        onClick={() => setHashtags(hashtags.filter((tag) => tag !== hashtag))}
                      >
                        X
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
            <div className="show_images my-3">
              {images.map((img, index) => (
                <div key={index} id="file_img">
                  {img.camera ? (
                    imageShow(img.camera)
                  ) : img.url ? (
                    <>{img.url.match(/video/i) ? videoShow(img.url) : imageShow(img.url)}</>
                  ) : (
                    <>
                      {img.type.match(/video/i)
                        ? videoShow(URL.createObjectURL(img))
                        : imageShow(URL.createObjectURL(img))}
                    </>
                  )}
                  <span
                    className="shadow-sm"
                    role="button"
                    tabIndex={0}
                    onKeyDown={() => deleteImage(index)}
                    onClick={() => deleteImage(index)}
                  >
                    &times;
                  </span>
                </div>
              ))}
            </div>
            {stream && (
              <>
                <div className="stream position-relative">
                  <video src="" className="rounded-3" autoPlay muted ref={videoRef} width="100%" height="100%" />
                  <button
                    className="btn btn-edit rounded-circle circle-sm d-flex justify-content-center align-items-center"
                    type="button"
                    onClick={handleStopStream}
                  >
                    <span className="material-icons-outlined fs-6">close</span>
                  </button>
                  <canvas className="d-none" ref={refCanvas} />
                </div>
                <p className="text-center">
                  <button
                    className="mx-auto btn btn-danger rounded-circle d-flex justify-content-center align-items-center circle"
                    type="button"
                    onClick={handleCapture}
                  >
                    <span className="material-icons-outlined">monochrome_photos</span>
                  </button>
                </p>
              </>
            )}
          </div>
          <div className="footer">
            <div className="p-3 rounded-3 mb-3 border row mx-0 shadow-sm">
              <div className="col-md-5 d-flex align-items-center fw-600">
                <span>Thêm vào bài viết</span>
              </div>
              <div className="col-md-7">
                <div className="d-flex justify-content-end">
                  <div className="p-2 d-flex btn-hover rounded-circle circle justify-content-center align-items-center">
                    <label htmlFor="file" style={{ height: '24px' }}>
                      <span className="material-icons-outlined text-success pointer">photo_library</span>
                      <input
                        type="file"
                        id="file"
                        name="file"
                        accept="image/*,video/*"
                        multiple
                        onChange={handleChangeImages}
                      />
                    </label>
                  </div>
                  <div className="p-2 d-flex ms-2 btn-hover rounded-circle circle justify-content-center align-items-center">
                    <span
                      className="material-icons-outlined text-danger pointer"
                      onKeyDown={handleStream}
                      onClick={handleStream}
                      role="button"
                      tabIndex={0}
                    >
                      video_camera_front
                    </span>
                  </div>
                  <div className="p-2 d-flex ms-2 btn-hover rounded-circle circle justify-content-center align-items-center">
                    <Icons setContent={setContent} content={content} />
                  </div>
                  <div className="p-2 d-flex ms-2 btn-hover rounded-circle circle justify-content-center align-items-center">
                    <span
                      className="material-icons-outlined text-danger pointer"
                      role="button"
                      tabIndex={0}
                      onClick={() => {
                        handleGetLocation();
                      }}
                    >
                      place
                    </span>
                  </div>
                  <div className="p-2 d-flex ms-2 btn-hover rounded-circle circle justify-content-center align-items-center">
                    <span className="material-icons-outlined pointer">more_horiz</span>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100 fw-600">
              Đăng
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StatusModal;
