/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/prop-types */
import React from 'react';

function LoadMoreButton({ result, page, load, handleLoadMore }) {
  return (
    <>
      {result < 9 * (page - 1)
        ? ''
        : !load && (
            <button type="button" className="btn btn-primary d-block mx-auto mb-3" onClick={handleLoadMore}>
              Load more
            </button>
          )}
    </>
  );
}

export default LoadMoreButton;
