import Logo from 'images/logo.png';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { login } from 'redux/actions/authAction';

export default function Login() {
  const initialState = { email: '', password: '' };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;
  const { auth } = useSelector((state) => state);
  const [typePass, setTypePass] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.token) history.push('/');
  }, [auth.token, history]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userData));
  };

  const eye = typePass ? (
    <span className="material-icons-outlined">visibility</span>
  ) : (
    <span className="material-icons-outlined">visibility_off</span>
  );

  return (
    <div className="wrap-form">
      <p className="text-center mt-4">
        <img src={Logo} height="100" alt="logo" />
      </p>
      <div className="rounded-15 shadow-lg overflow-hidden mx-auto" style={{ width: 600 }}>
        <div className="row">
          <div className="col-md-12">
            <div className="bg-white p-5 h-100">
              <p className="fs-2 my-5 text-center">T-Network</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    value={email}
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="mb-3">
                  <div className="position-relative">
                    <input
                      type={typePass ? 'text' : 'password'}
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={handleChangeInput}
                    />
                    <small
                      className="position-absolute eye"
                      onKeyDown={() => setTypePass(!typePass)}
                      onClick={() => setTypePass(!typePass)}
                      role="button"
                      tabIndex={0}
                    >
                      {eye}
                    </small>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-100 btn-login">
                  Đăng nhập
                  <span className="material-icons-outlined">east</span>
                </button>
                <p className="text-center mb-0 mt-3 form-text">
                  <small>
                    Bạn chưa có tài khoản?{' '}
                    <Link to="/register" className="hover-underline text-primary">
                      Đăng ký
                    </Link>
                  </small>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
