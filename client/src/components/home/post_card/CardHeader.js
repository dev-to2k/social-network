/* eslint-disable no-alert */
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { GLOBALTYPES } from 'redux/actions/globalTypes';
import { deletePost } from 'redux/actions/postAction';
import { BASE_URL } from 'utils/config';

function CardHeader({ post }) {
  const { auth, socket } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleEditPost = () => {
    dispatch({
      type: GLOBALTYPES.STATUS,
      payload: {
        ...post,
        onEdit: true,
      },
    });
  };

  const handleDeletePost = () => {
    if (window.confirm('Bạn có muốn xoá?')) {
      dispatch(deletePost({ post, auth, socket }));
      return history.push('/');
    }

    return null;
  };

  const handleCopyPost = () => {
    navigator.clipboard.writeText(`${BASE_URL}/post/${post._id}`);
  };

  return (
    <div className="card_header d-flex mb-3">
      <div>
        <img src={post.user.avatar} className="rounded-circle circle img-cover" alt="avatar" />
      </div>
      <div className="d-flex align-items-center justify-content-between w-100 ps-2">
        <div className="card_name">
          <h6 className="m-0">
            <Link to={`/profile/${post.user._id}`} className="text-dark">
              {post.user.username}
            </Link>
          </h6>
          <Link to={`/post/${post._id}`}>
            <small className="text-muted hover-underline">{moment(post.createdAt).fromNow()}</small>
          </Link>
        </div>
        <div className="nav-item dropdown">
          <div
            className="pointer btn-edit rounded-circle circle-sm text-center"
            style={{ lineHeight: '27px' }}
            id="moreLink"
            data-bs-toggle="dropdown"
          >
            <span className="material-icons-outlined fs-6">more_horiz</span>
          </div>
          <div className="dropdown-menu shadow rounded-3 border-0 px-2" aria-labelledby="moreLink">
            {auth.user._id === post.user._id && (
              <>
                <button
                  type="button"
                  className="dropdown-item p-2 rounded-3 d-flex my-1 pointer"
                  onClick={handleEditPost}
                >
                  <span className="material-icons-outlined me-2">create</span>
                  <span className="fw-500">Chỉnh sửa bài viết</span>
                </button>
                <button
                  type="button"
                  className="dropdown-item p-2 rounded-3 d-flex my-1 pointer"
                  onClick={handleDeletePost}
                >
                  <span className="material-icons-outlined me-2">delete_outline</span>
                  <span className="fw-500">Xoá bài viết</span>
                </button>
              </>
            )}
            <hr className="dropdown-divider" />
            <button type="button" className="dropdown-item p-2 d-flex pointer" onClick={handleCopyPost}>
              <span className="material-icons-outlined me-2 fs-5">content_copy</span>
              <span className="fw-500">Sao chép liên kết</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardHeader;

CardHeader.propTypes = {
  post: PropTypes.objectOf(PropTypes.any).isRequired,
};
