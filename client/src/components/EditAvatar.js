import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GLOBALTYPES } from 'redux/actions/globalTypes';
import { updateAvatarUser } from 'redux/actions/profileAction';
import { checkImage } from 'utils/imageUpload';

export default function EditAvatar({ setFormChangeAvatar }) {
  const [avatar, setAvatar] = useState('');

  const { auth } = useSelector((state) => state);

  const dispatch = useDispatch();

  const changeAvatar = (e) => {
    const file = e.target.files[0];
    const err = checkImage(file);
    if (err) {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err } });
    }
    setAvatar(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateAvatarUser({ avatar, auth }));
    setFormChangeAvatar(false);
  };

  return (
    <div className="change_avatar">
      <form className="shadow rounded-3" onSubmit={handleSubmit}>
        <div className="d-flex align-items-center justify-content-end">
          <button
            type="button"
            className="btn btn-edit rounded-circle circle d-flex justify-content-center align-items-center"
            onClick={() => setFormChangeAvatar(false)}
          >
            <span className="material-icons-outlined">close</span>
          </button>
        </div>
        <div className="avatar d-flex flex-column align-items-center">
          <div className="block-avatar mb-3">
            <img src={avatar ? URL.createObjectURL(avatar) : auth.user.avatar} className="img-fluid w-100" alt="" />
          </div>
          <label htmlFor="file_up" className="rounded-3 fw-bold">
            <span className="material-icons-outlined me-2">add_a_photo</span>
            Tải ảnh lên
            <input type="file" name="file" id="file_up" accept="image/*" onChange={changeAvatar} />
          </label>
        </div>
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center justify-content-start">
            <span className="text-primary fw-bold">Thay đổi avatar</span>
          </div>
          <div className="col-lg-6 text-end">
            <button className="btn btn-primary fw-bold" type="submit">
              Luu
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

EditAvatar.propTypes = {
  setFormChangeAvatar: PropTypes.func.isRequired,
};
