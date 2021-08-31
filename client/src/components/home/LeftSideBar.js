import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function LeftSideBar() {
  const { auth } = useSelector((state) => state);
  return (
    <div className="rounded-10 shadow-sm p-3 border left-side-bar bg-white">
      <ul>
        <li>
          <Link to={`/profile/${auth.user._id}`}>
            <img src={auth.user.avatar} className="me-2 img-cover rounded-circle circle" alt="avatar" />
            <span className="fw-600">{auth.user.username}</span>
          </Link>
        </li>
        <li>
          <Link to="/message">
            <i className="fab fa-facebook-messenger text-primary fs-3 me-2" />
            <span className="fw-600">Tin nhắn</span>
          </Link>
        </li>
        <li>
          <Link to="/discover">
            <i className="fas fa-globe-americas text-success me-2 fs-3" />
            <span className="fw-600">Khám phá</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default LeftSideBar;
