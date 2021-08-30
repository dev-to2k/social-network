/* eslint-disable indent */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export default function UserCard(props) {
  const { user, children, setShowFollowers, setShowFollowing, msg } = props;

  const handleCloseAll = () => {
    if (setShowFollowers) setShowFollowers(false);
    if (setShowFollowing) setShowFollowing(false);
  };

  const showMsg = (user) => (
    <>
      <div>{user.text}</div>
      {user.media.length > 0 && (
        <div>
          {user.media.length} <i className="fas fa-image" />
        </div>
      )}

      {user.call && (
        <span className="material-icons">
          {user.call.times === 0
            ? user.call.video
              ? 'videocam_off'
              : 'phone_disabled'
            : user.call.video
            ? 'video_camera_front'
            : 'call'}
        </span>
      )}
    </>
  );

  return (
    <div className="d-flex p-3 user align-items-center text-wrap justify-content-between">
      <Link to={`/profile/${user._id}`} onClick={handleCloseAll} className="text-dark fw-600 d-flex">
        <img src={user.avatar} className="me-1 img-cover rounded-circle circle" alt="avatar" />
        <div className="d-flex flex-column">
          <span>{user.fullname}</span>
          <small>{msg ? showMsg(user) : ''}</small>
        </div>
      </Link>
      {children}
    </div>
  );
}
