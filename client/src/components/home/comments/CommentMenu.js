/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment } from 'redux/actions/commentAction';

function CommentMenu({ post, comment, setOnEdit }) {
  const { auth, socket } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleRemove = () => {
    if (post.user._id === auth.user._id || comment.user._id === auth.user._id) {
      dispatch(deleteComment({ post, auth, comment, socket }));
    }
  };

  const MenuItem = () => (
    <>
      <div className="dropdown-item px-2 rounded-3 fw-600" style={{ color: '#333333' }}>
        <button type="button" className="d-flex align-items-center" onClick={() => setOnEdit(true)}>
          <span className="material-icons-outlined me-2">create</span>
          <span className="mt-2">Chỉnh sửa</span>
        </button>
      </div>
      <div className="dropdown-item px-2 rounded-3 fw-600">
        <button type="button" className="d-flex align-items-center" onClick={handleRemove}>
          <span className="material-icons-outlined me-2">delete</span>
          <span className="mt-2">Xoá</span>
        </button>
      </div>
    </>
  );

  return (
    <div className="menu d-flex align-items-center ms-5">
      {(post.user._id === auth.user._id || comment.user._id === auth.user._id) && (
        <div
          className="pointer btn-edit btn rounded-circle circle-sm d-flex justify-content-center align-items-center"
          style={{ lineHeight: '0px' }}
        >
          <div className="nav-item dropdown">
            <span className="material-icons-outlined fs-5" id="moreLink" data-bs-toggle="dropdown">
              more_horiz
            </span>

            <div className="dropdown-menu fs-16 p-2 shadow border" aria-labelledby="moreLink">
              {post.user._id === auth.user._id ? (
                comment.user._id === auth.user._id ? (
                  MenuItem()
                ) : (
                  <div className="dropdown-item px-2 rounded-3 fw-600">
                    <button type="button" className="d-flex align-items-center" onClick={handleRemove}>
                      <span className="material-icons-outlined me-2">delete</span>
                      <span className="mt-2">Xoá</span>
                    </button>
                  </div>
                )
              ) : (
                comment.user._id === auth.user._id && MenuItem()
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CommentMenu;
