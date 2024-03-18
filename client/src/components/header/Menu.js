/* eslint-disable arrow-body-style */
/* eslint-disable react/no-array-index-key */

import NotifyModal from 'components/NotifyModal';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { logout } from 'redux/actions/authAction';

export default function Menu() {
  const navLink = [
    {
      label: 'Home',
      icon: 'fas fa-home',
      path: '/',
    },
    {
      label: 'Discover',
      icon: 'fas fa-globe-americas',
      path: '/discover',
    },
    {
      label: 'Message',
      icon: 'fab fa-facebook-messenger',
      path: '/message',
    },
  ];

  const utils = [
    {
      name: 'Chat Bot',
      to: '/message',
    },
    {
      name: 'PDF',
      to: '/chatPdf',
    },
  ];

  const { auth, notify } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <ul className="navbar-nav flex-row justify-content-end align-items-center">
      {navLink.map((link) => (
        <li className="nav-item mx-2" key={link.label}>
          <NavLink
            className="btn btn-edit rounded-circle circle d-flex justify-content-center align-items-center nav-link text-dark"
            exact
            activeClassName="active-click"
            to={link.path}
          >
            <i className={link.icon} />
          </NavLink>
        </li>
      ))}
      <li className="nav-item dropdown">
        <button
          className="nav-link text-dark text-center rounded-circle circle button-dropdown"
          style={{ paddingTop: '1px' }}
          id="navbarDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          type="button"
        >
          <i className="fas fa-sort-down fs-4" />
        </button>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          {utils.map((util) => {
            return (
              <li key={util.name} className="p-2">
                <Link to={util.to}>
                  <span className="text-dark">{util.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
      <li className="nav-item mx-2 dropdown notify">
        <button
          type="button"
          className="btn btn-edit rounded-circle circle d-flex justify-content-center align-items-center position-relative"
          data-bs-toggle="dropdown"
          id="dropdownNotify"
        >
          <span className="material-icons">notifications</span>
          {notify.data.length > 0 ? (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {notify.data.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          ) : (
            ''
          )}
        </button>
        <ul className="dropdown-menu shadow px-2 border" aria-labelledby="dropownNotify">
          <NotifyModal />
        </ul>
      </li>
      <li className="nav-item user-username">
        <Link to={`/profile/${auth.user._id}`} className="d-flex align-items-center">
          <img src={auth.user.avatar} className="rounded-circle circle img-cover" alt="avatar" />
          <span className="text-white d-none d-xxl-block ms-2">{auth.user.username}</span>
        </Link>
      </li>
      <li className="nav-item dropdown">
        <button
          className="nav-link text-dark text-center rounded-circle circle button-dropdown"
          style={{ paddingTop: '1px' }}
          id="navbarDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          type="button"
        >
          <i className="fas fa-sort-down fs-4" />
        </button>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li className="p-2">
            <Link to={`/profile/${auth.user._id}`}>
              <img src={auth.user.avatar} className="img-fluid rounded-circle me-2 circle-sm img-cover" alt="avatar" />
              <span className="text-dark">{auth.user.username}</span>
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li className="p-2">
            <Link className="dropdown-item p-0 d-flex" to="/" onClick={() => dispatch(logout())}>
              <i className="fas fa-sign-out-alt me-2 fs-24" />
              Logout
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
}
