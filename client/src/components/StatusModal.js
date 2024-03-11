/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import { imageShow, videoShow } from 'utils/mediaShow';
import { GLOBALTYPES } from '../redux/actions/globalTypes';
import { createPost, updatePost } from '../redux/actions/postAction';

import Icons from './Icons';

const Map = ({ position, setCurrentLocation }) => (
  <div className="map bg-light rounded p-3 position-relative">
    <button type="button" className="btn p-0 position-absolute end-0 top-0" onClick={() => setCurrentLocation(null)}>
      <span className="material-icons-outlined text-danger pointer">close</span>
    </button>
    <h6>Vị trí của bạn</h6>
    <p className="mb-0">Quốc gia: {position.countryName}</p>
    <p className="mb-0">Tỉnh: {position.principalSubdivision}</p>
    <p className="mb-0">Thành phố: {position.city}</p>
    <p className="mb-0">Địa phương: {position.locality}</p>
    <p className="mb-0">Vĩ độ: {position.latitude}</p>
    <p className="mb-0">Kinh độ: {position.longitude}</p>
    <p className="mb-0">Lục địa: {position.continent}</p>
    <p className="mb-0">Plus Code: {position.plusCode}</p>
  </div>
);

function StatusModal() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [images, setImages] = useState([]);
  const [stream, setStream] = useState(false);
  const [tracks, setTracks] = useState('');
  const [content, setContent] = useState('');
  const { auth, status, socket } = useSelector((state) => state);
  const dispatch = useDispatch();
  const videoRef = useRef();
  const refCanvas = useRef();

  const handleChangeImages = (e) => {
    const files = [...e.target.files];
    let err = '';
    const newImages = [];

    files.forEach((file) => {
      if (!file) err = 'The image does not exists!';
      if (file.size > 1024 * 1024 * 5) err = 'The image/video largest is 5mb.';
      return newImages.push(file);
    });

    if (err) dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err } });
    setImages([...images, ...newImages]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (images.length === 0) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: 'Please add photo.',
        },
      });
    }

    if (status.onEdit) {
      dispatch(updatePost({ content, images, auth, status }));
    } else {
      dispatch(createPost({ content, images, auth, socket }));
    }

    setContent('');
    setImages([]);
    if (tracks) tracks.stop();
    dispatch({ type: GLOBALTYPES.STATUS, payload: false });
  };

  useEffect(() => {
    if (status.onEdit) {
      setContent(status.content);
      setImages(status.images);
    }
  }, [status]);

  const onGetPlace = () => {
    if (!navigator.geolocation) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: 'Định vị địa lý không được trình duyệt của bạn hỗ trợ',
        },
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const response = await axios.get('https://api.bigdatacloud.net/data/reverse-geocode-client', {
            params: {
              latitude,
              longitude,
              localityLanguage: 'vn',
            },
          });
          setCurrentLocation(response.data); // Xử lý dữ liệu tại đây
        } catch (error) {
          console.error(error);
        }
      },
      (error) => {
        dispatch({
          type: GLOBALTYPES.ALERT,
          payload: {
            error: error.message,
          },
        });
      }
    );
  };

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
            <div className="form-floating">
              <TextareaAutosize
                onChange={(e) => setContent(e.target.value)}
                value={content}
                placeholder="Bạn đang nghĩ gì?"
              />
            </div>
            {currentLocation && <Map position={currentLocation} setCurrentLocation={setCurrentLocation} />}
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
                      onClick={onGetPlace}
                      onKeyDown={onGetPlace}
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
