import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { register } from 'redux/actions/authAction';

export default function Register() {
  const { auth, alert } = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();

  const initialState = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: 'male',
  };

  const [userData, setUserData] = useState(initialState);
  // eslint-disable-next-line object-curly-newline
  const { fullname, username, email, password, confirmPassword } = userData;

  const [typePass, setTypePass] = useState(false);
  const [typeConfirmPass, setTypeConfirmPass] = useState(false);

  useEffect(() => {
    if (auth.token) history.push('/');
  }, [auth.token, history]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userData));
  };

  const eye = typePass ? (
    <span className="material-icons-outlined">visibility</span>
  ) : (
    <span className="material-icons-outlined">visibility_off</span>
  );

  const eye2 = typeConfirmPass ? (
    <span className="material-icons-outlined">visibility</span>
  ) : (
    <span className="material-icons-outlined">visibility_off</span>
  );

  return (
    <div className="wrap-form">
      <div className="rounded-15 shadow-lg overflow-hidden mx-auto" style={{ width: 600 }}>
        <div className="row">
          <div className="col-md-12">
            <div className="bg-white p-5 h-100">
              <p className="fs-2 text-center my-5">T-Network</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullname" className="form-label">
                    Họ và tên
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      className="form-control"
                      onChange={handleChangeInput}
                      value={fullname}
                      style={{ background: `${alert.fullname ? '#fd2d6a14' : ''}` }}
                    />
                  </label>
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Tài khoản
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="form-control"
                      onChange={handleChangeInput}
                      value={username.toLowerCase().replace(/ /g, '')}
                      style={{ background: `${alert.username ? '#fd2d6a14' : ''} ` }}
                    />
                  </label>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Địa chỉ email
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      value={email}
                      onChange={handleChangeInput}
                    />
                  </label>
                </div>
                <div className="mb-3">
                  <div className="position-relative">
                    <label htmlFor="password" className="form-label">
                      Mật khẩu
                      <input
                        type={typePass ? 'text' : 'password'}
                        name="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={handleChangeInput}
                      />
                    </label>

                    <small
                      className="position-absolute"
                      style={{ bottom: '8px', right: '15px' }}
                      onKeyDown={() => setTypePass(!typePass)}
                      onClick={() => setTypePass(!typePass)}
                      role="button"
                      tabIndex={0}
                    >
                      {eye}
                    </small>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="position-relative">
                    <label htmlFor="confirmPassword" className="form-label">
                      Nhập lại mật khẩu
                      <input
                        type={typeConfirmPass ? 'text' : 'password'}
                        name="confirmPassword"
                        className="form-control"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={handleChangeInput}
                      />
                    </label>

                    <small
                      style={{ bottom: '8px', right: '15px' }}
                      className="position-absolute"
                      onKeyDown={() => setTypeConfirmPass(!typeConfirmPass)}
                      onClick={() => setTypeConfirmPass(!typeConfirmPass)}
                      role="button"
                      tabIndex={0}
                    >
                      {eye2}
                    </small>
                  </div>
                </div>
                <div className="form-group my-4">
                  <label htmlFor="gender" className="mb-3 form-label">
                    Giới tính
                    <div className="d-flex justify-content-between">
                      <div className="form-check">
                        <label className="form-check-label" htmlFor="male">
                          Nam
                          <input
                            type="radio"
                            id="male"
                            name="gender"
                            className="form-check-input"
                            value="male"
                            defaultChecked
                            onChange={handleChangeInput}
                          />
                        </label>
                      </div>
                      <div className="form-check">
                        <label className="form-check-label" htmlFor="female">
                          Nữ
                          <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            className="form-check-input"
                            onChange={handleChangeInput}
                          />
                        </label>
                      </div>
                      <div className="form-check">
                        <label className="form-check-label" htmlFor="other">
                          Khác
                          <input
                            type="radio"
                            id="other"
                            name="gender"
                            value="other"
                            className="form-check-input"
                            onChange={handleChangeInput}
                          />
                        </label>
                      </div>
                    </div>
                  </label>
                </div>
                <button type="submit" className="btn btn-primary w-100 me-2">
                  Đăng ký
                </button>
                <p className="text-center mb-0 mt-3 form-text">
                  <small>
                    Bạn đã có tài khoản?{' '}
                    <Link to="/login" className="text-primary w-50">
                      Đăng nhập
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
