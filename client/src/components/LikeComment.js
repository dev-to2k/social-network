import PropTypes from 'prop-types';
import React from 'react';

function LikeComment({ isLike, handleLike, handleUnLike }) {
  return (
    <>
      {isLike ? (
        <button onClick={handleUnLike} type="button">
          <small className="me-3 fw-bold reply pointer text-danger">Thích</small>
        </button>
      ) : (
        <button onClick={handleLike} type="button">
          <small className="me-3 fw-bold reply pointer text-secondary">Thích</small>
        </button>
      )}
    </>
  );
}

export default LikeComment;

LikeComment.propTypes = {
  isLike: PropTypes.bool.isRequired,
  handleLike: PropTypes.func.isRequired,
  handleUnLike: PropTypes.func.isRequired,
};
