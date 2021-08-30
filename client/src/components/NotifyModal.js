/* eslint-disable no-alert */
import moment from 'moment';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAllNotifies, isReadNotify, NOTIFY_TYPES } from 'redux/actions/notifyAction';

function NotifyModal() {
  const { auth, notify } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleIsRead = (msg) => {
    dispatch(isReadNotify({ msg, auth }));
  };

  const handleSound = () => {
    dispatch({ type: NOTIFY_TYPES.UPDATE_SOUND, payload: !notify.sound });
  };

  const handleDeleteAll = () => {
    const newArr = notify.data.filter((item) => item.isRead === false);
    if (newArr.length === 0) return dispatch(deleteAllNotifies(auth.token));

    if (window.confirm(`Bạn có ${newArr.length} thông báo chưa đọc. Bạn có chắc chắn muốn xóa tất cả không?`)) {
      return dispatch(deleteAllNotifies(auth.token));
    }

    return null;
  };

  return (
    <div className="notify-modal" style={{ width: '100%' }}>
      <div className="title px-2 mb-2 d-flex justify-content-between align-items-center">
        <span className="fs-5 fw-bold">Thông báo</span>
        {notify.sound ? (
          <button type="button" onClick={handleSound}>
            <i className="fas fa-bell text-danger" style={{ fontSize: '1.2rem' }} />
          </button>
        ) : (
          <button type="button" onClick={handleSound}>
            <i className="fas fa-bell-slash text-danger" style={{ fontSize: '1.2rem' }} />
          </button>
        )}
      </div>
      <div className="body p-2">
        {notify.data.map((msg) => (
          <div className="sub-notify" key={msg._id}>
            <Link to={`${msg.url}`} onClick={() => handleIsRead(msg)}>
              <div className="d-flex text-dark">
                <div>
                  <img src={msg.user.avatar} className="rounded-circle circle img-cover" alt="avatar" />
                </div>
                <div className="px-2 w-100">
                  <p className="mb-0">
                    <strong>{msg.user.fullname}</strong>
                    <span>
                      &nbsp;{msg.text}: {msg.content}
                    </span>
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">
                      <i className="fas fa-image fw-bold text-primary me-2" />
                      {moment(msg.createdAt).fromNow()}
                    </small>
                    {!msg.isRead && <i className="fas fa-circle text-primary" />}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <hr />
      <div className="px-2">
        <p className="mb-0 text-end">
          <button type="button" onClick={handleDeleteAll}>
            <span className="hover-underline pointer text-primary">Xoá tất cả</span>
          </button>
        </p>
      </div>
    </div>
  );
}

export default NotifyModal;
