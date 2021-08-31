/* eslint-disable comma-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
import RingRing from 'audio/client_src_audio_ringring.mp3';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GLOBALTYPES } from 'redux/actions/globalTypes';
import { addMessage } from 'redux/actions/messageAction';

function CallModal() {
  const { call, peer, auth, socket } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [mins, setMins] = useState(0);
  const [second, setSecond] = useState(0);
  const [total, setTotal] = useState(0);
  const [hours, setHours] = useState(0);

  const [answer, setAnswer] = useState(false);
  const [tracks, setTracks] = useState(null);
  const [newCall, setNewCall] = useState(null);

  const youVideo = useRef();
  const otherVideo = useRef();

  // Set Time
  useEffect(() => {
    const setTime = () => {
      setTotal((t) => t + 1);
      setTimeout(setTime, 1000);
    };
    setTime();

    return () => setTotal(0);
  }, []);

  useEffect(() => {
    setSecond(total % 60);
    setMins(parseInt(total / 60, 10));
    setHours(parseInt(total / 3600, 10));
  }, [total]);

  // End call
  const addCallMessage = useCallback(
    (call, times, disconnect) => {
      if (call.recipient !== auth.user._id || disconnect) {
        const msg = {
          sender: call.sender,
          recipient: call.recipient,
          text: '',
          media: [],
          call: { video: call.video, times },
          createdAt: new Date().toISOString(),
        };
        dispatch(addMessage({ msg, auth, socket }));
      }
    },
    [auth, dispatch, socket]
  );

  const handleEndCall = () => {
    tracks && tracks.forEach((track) => track.stop());
    if (newCall) newCall.close();

    const times = answer ? total : 0;
    socket.emit('endCall', { ...call, times });

    addCallMessage(call, times);
    dispatch({ type: GLOBALTYPES.CALL, payload: null });
  };

  useEffect(() => {
    if (answer) {
      setTotal(0);
    } else {
      const timer = setTimeout(() => {
        socket.emit('endCall', { ...call, times: 0 });
        addCallMessage(call, 0);
        dispatch({ type: GLOBALTYPES.CALL, payload: null });
      }, 15000);

      return () => clearTimeout(timer);
    }
    return null;
  }, [dispatch, answer, call, socket, tracks]);

  useEffect(() => {
    socket.on('endCallToClient', (data) => {
      tracks && tracks.forEach((track) => track.stop());
      if (newCall) newCall.close();
      addCallMessage(data, data.times);
      dispatch({ type: GLOBALTYPES.CALL, payload: null });
    });

    return () => socket.off('endCallToClient');
  }, [socket, dispatch, tracks, addCallMessage, newCall]);

  // Stream Media
  const openStream = (video) => {
    const config = { audio: true, video };
    return navigator.mediaDevices.getUserMedia(config);
  };

  const playStream = (tag, stream) => {
    const video = tag;
    video.srcObject = stream;
    video.play();
  };

  // Answer call
  const handleAnswer = () => {
    openStream(call.video).then((stream) => {
      playStream(youVideo.current, stream);
      const track = stream.getTracks();
      setTracks(track);

      const newCall = peer.call(call.peerId, stream);
      newCall.on('stream', (remoteStream) => {
        playStream(otherVideo.current, remoteStream);
      });
      setAnswer(true);
      setNewCall(newCall);
    });
  };

  useEffect(() => {
    peer.on('call', (newCall) => {
      openStream(call.video).then((stream) => {
        if (youVideo.current) {
          playStream(youVideo.current, stream);
        }
        const track = stream.getTracks();
        setTracks(track);

        newCall.answer(stream);
        newCall.on('stream', (remoteStream) => {
          if (otherVideo.current) {
            playStream(otherVideo.current, remoteStream);
          }
        });
        setAnswer(true);
        setNewCall(newCall);
      });
    });
    return () => peer.removeListener('call');
  }, [peer, call.video]);

  // Disconnect
  useEffect(() => {
    socket.on('callerDisconnect', () => {
      tracks && tracks.forEach((track) => track.stop());
      if (newCall) newCall.close();

      const times = answer ? total : 0;
      addCallMessage(call, times, true);

      dispatch({ type: GLOBALTYPES.CALL, payload: null });

      dispatch({ type: GLOBALTYPES.ALERT, payload: { error: `${call.fullname} disconnect` } });
    });

    return () => socket.off('callerDisconnect');
  }, [socket, tracks, dispatch, call, addCallMessage, answer, total, newCall]);

  // Play - Pause Audio
  const playAudio = (newAudio) => {
    newAudio.play();
  };

  const pauseAudio = (newAudio) => {
    newAudio.pause();
    newAudio.currentTime = 0;
  };

  useEffect(() => {
    const newAudio = new Audio(RingRing);
    if (answer) {
      pauseAudio(newAudio);
    } else {
      playAudio(newAudio);
    }

    return () => pauseAudio(newAudio);
  }, [answer]);

  return (
    <div className="call_modal">
      <div
        className="call_box"
        style={{
          display: answer && call.video ? 'none' : 'flex',
        }}
      >
        <div>
          <img src={call.avatar} className="img-cover rounded-circle circle-big" alt="avatar" />
          <h4>{call.username}</h4>
          <h6>{call.fullname}</h6>
          {answer ? (
            <div>
              {' '}
              <span>{hours.toString().length < 2 ? `0${hours}` : hours}</span>
              <span>:</span>
              <span>{mins.toString().length < 2 ? `0${mins}` : mins}</span>
              <span>:</span>
              <span>{second.toString().length < 2 ? `0${second}` : second}</span>
            </div>
          ) : (
            <div>{call.video ? <span>đang gọi video...</span> : <span>đang gọi video...</span>}</div>
          )}

          {!answer && (
            <div className="timer">
              <small>{mins.toString().length < 2 ? `0${mins}` : mins}</small>
              <small>:</small>
              <small>{second.toString().length < 2 ? `0${second}` : second}</small>
            </div>
          )}

          <div className="call_menu">
            <span className="material-icons call-end" onClick={handleEndCall}>
              call_end
            </span>

            {call.recipient === auth.user._id && !answer && (
              <>
                {call.video ? (
                  <span className="material-icons videocam" onClick={handleAnswer}>
                    videocam
                  </span>
                ) : (
                  <span className="material-icons call" onClick={handleAnswer}>
                    call
                  </span>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <div
        className="show_video"
        style={{
          opacity: answer && call.video ? '1' : '0',
        }}
      >
        <video ref={youVideo} className="you_video" playsInline muted>
          <track kind="captions" />
        </video>
        <video ref={otherVideo} className="other_video" playsInline>
          <track kind="captions" />
        </video>

        <div className="time_video">
          <span>{hours.toString().length < 2 ? `0${hours}` : hours}</span>
          <span>:</span>
          <span>{mins.toString().length < 2 ? `0${mins}` : mins}</span>
          <span>:</span>
          <span>{second.toString().length < 2 ? `0${second}` : second}</span>
        </div>

        <button type="button" className="material-icons text-danger end_call" onClick={handleEndCall}>
          call_end
        </button>
      </div>
    </div>
  );
}

export default CallModal;
