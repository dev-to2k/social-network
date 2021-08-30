/* eslint-disable indent */
/* eslint-disable no-alert */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMessages } from 'redux/actions/messageAction';
import { imageShow, videoShow } from 'utils/mediaShow';
import Times from './Times';

function MsgDisplay({ user, msg, data }) {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDeleteMessages = () => {
    if (!data) return;

    if (window.confirm('Bạn có muốn thu hồi tin nhắn chứ?')) {
      dispatch(deleteMessages({ msg, data, auth }));
    }
  };

  return (
    <>
      <div className="chat_title" style={{ display: user._id === auth.user._id ? 'none' : 'block' }}>
        <img src={user.avatar} className="rounded-circle circle-sm img-cover me-1" alt="avatar" />
        <span className="fw-500">{user.fullname}</span>
      </div>

      <div className="you_content">
        {user._id === auth.user._id && (
          <button type="button" onClick={handleDeleteMessages}>
            <i className="fas fa-trash" />
          </button>
        )}

        <div>
          {msg.text && <div className="chat_text">{msg.text}</div>}
          {msg.media.map((item, index) => (
            <div key={index}>{item.url.match(/video/i) ? videoShow(item.url) : imageShow(item.url)}</div>
          ))}
        </div>

        {msg.call && (
          <button type="button" className="btn d-flex align-items-center py-3 btn-edit rounded-10">
            <span
              className="material-icons fw-bold me-1 fs-4"
              style={{ color: msg.call.times === 0 ? '#e74c3c' : '#2ecc71' }}
            >
              {msg.call.times === 0
                ? msg.call.video
                  ? 'videocam_off'
                  : 'phone_disabled'
                : msg.call.video
                ? 'video_camera_front'
                : 'call'}
            </span>

            <div className="text-start">
              <h6>{msg.call.video ? 'Video call' : 'Audio Call'}</h6>
              <small>
                {msg.call.times > 0 ? <Times total={msg.call.times} /> : new Date(msg.call.times).toLocaleTimeString()}
              </small>
            </div>
          </button>
        )}
      </div>

      <div className="chat_time">{new Date(msg.createdAt).toLocaleString()}</div>
    </>
  );
}

export default MsgDisplay;
