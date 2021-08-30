import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';
import Search from './Search';

export default function Header() {
  return (
    <div className="container-fluid py-1 header bg-primary">
      <div className="row align-items-center">
        <div className="col-sm-12 col-md-2 col-lg-2 col-xl-3 left">
          <NavLink className="navbar-brand ms-4 text-white" to="/" onClick={() => window.scrollTo({ top: 0 })}>
            T-Network
          </NavLink>
        </div>
        <div className="col-sm-12 col-md-5 col-lg-6 col-xl-5 center">
          <Search />
        </div>
        <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 right">
          <Menu />
        </div>
      </div>
    </div>
  );
}
