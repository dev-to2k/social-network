import PropTypes from 'prop-types';
import React from 'react';

function LikeButton({ isLike, handleLike, handleUnLike }) {
  return (
    <>
      {isLike ? (
        <button type="button" onClick={handleUnLike}>
          <i className="fas fa-heart text-danger me-2" />
        </button>
      ) : (
        <button type="button" onClick={handleLike}>
          <i className="far fa-heart me-2" />
        </button>
      )}
    </>
  );
}

export default LikeButton;

LikeButton.propTypes = {
  isLike: PropTypes.bool.isRequired,
  handleLike: PropTypes.func.isRequired,
  handleUnLike: PropTypes.func.isRequired,
};
