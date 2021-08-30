/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GLOBALTYPES } from 'redux/actions/globalTypes';

function Status() {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="status">
      <div className="p-3 border rounded-10 shadow-sm bg-white">
        <button
          className="btn-edit btn rounded-pill w-100 text-start"
          type="button"
          onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}
        >
          <img src={auth.user.avatar} className="img-fluid circle rounded-circle me-2 img-cover" alt="" />
          Bạn đang nghĩ gì?
        </button>
        <hr />
        <div className="row">
          <div
            className="col-md-6 col-lg-4 col-sm-6 live pointer left"
            onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}
          >
            <span className="material-icons-outlined text-danger">video_camera_front</span>
            <span className="ms-1">Ảnh trực tiếp</span>
          </div>
          <div
            className="col-md-6 col-lg-4 col-sm-6 picture-video pointer center"
            onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}
          >
            <span className="material-icons-outlined text-success">photo_library</span>
            <span className="ms-1">Ảnh/video</span>
          </div>
          <div
            className="col-lg-4 activity-emoji d-none d-lg-block pointer right"
            onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}
          >
            <div className="d-flex h-100 align-items-center justify-content-center">
              <span className="material-icons-outlined text-warning">emoji_emotions</span>
              <span className="ms-1">Cảm xúc</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Status;
