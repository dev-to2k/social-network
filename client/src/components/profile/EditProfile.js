/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfileUser } from '../../redux/actions/profileAction';

export default function EditProfile({ user, setOnEdit }) {
  const initialState = {
    fullname: '',
    mobile: '',
    address: '',
    website: '',
    story: '',
    gender: '',
  };

  const [userData, setUserData] = useState(initialState);
  const { fullname, mobile, address, website, story, gender } = userData;

  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    setUserData(user);
  }, [user]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfileUser({ userData, auth }));
    setOnEdit(false);
  };

  return (
    <div className="edit_profile">
      <form className="rounded-3 shadow" onSubmit={handleSubmit}>
        <div className="info_avatar mb-3">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h4>Chỉnh sửa chi tiết</h4>
            <button
              className="btn btn-edit position-absolute rounded-circle d-flex justify-content-center align-items-center"
              style={{ top: '0', right: '0', width: '36px', height: '36px' }}
              type="button"
              onClick={() => setOnEdit(false)}
            >
              <span className="material-icons-outlined">close</span>
            </button>
          </div>
          <hr />
          <div className="form-group mb-3">
            <label htmlFor="fullname">
              Họ và tên{' '}
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  name="fullname"
                  value={fullname}
                  onChange={handleChangeInput}
                />
                <small
                  className="position-absolute text-danger"
                  style={{ top: '50%', right: '5px', transform: 'translateY(-50%)' }}
                >
                  {fullname.length}/25
                </small>
              </div>
            </label>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="mobile">
              Số điện thoại{' '}
              <input
                type="text"
                className="form-control"
                id="mobile"
                name="mobile"
                value={mobile}
                onChange={handleChangeInput}
              />
            </label>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="address">
              Địa chỉ{' '}
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={address}
                onChange={handleChangeInput}
              />
            </label>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="website">
              Website{' '}
              <input
                type="text"
                className="form-control"
                id="website"
                name="website"
                value={website}
                onChange={handleChangeInput}
              />
            </label>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="story">
              Câu chuyện{' '}
              <div className="position-relative">
                <textarea className="form-control" id="story" name="story" value={story} onChange={handleChangeInput} />
                <small className="text-danger d-block text-end">{story.length}/200</small>
              </div>
            </label>
          </div>

          <label htmlFor="gender">
            Giới tính{' '}
            <div className="input-group-prepend">
              <select name="gender" id="gender" value={gender} onChange={handleChangeInput} className="form-select">
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
                <option value="other">Khác</option>
              </select>
            </div>
          </label>
        </div>
        <div className="row">
          <div className="col-lg-6" />
          <div className="col-lg-6 text-end">
            <button type="reset" className="btn btn-edit">
              Huỷ
            </button>
            <button className="btn btn-primary ms-2" type="submit">
              Lưu
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

EditProfile.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  setOnEdit: PropTypes.func.isRequired,
};
