/* eslint-disable react/prop-types */
import React from 'react';
import Skeleton from 'react-loading-skeleton';

function LoadingCard() {
  return (
    <div className="rounded-10 p-3 shadow my-4 bg-white">
      <div className="d-flex mb-3">
        <Skeleton circle width={36} height={36} />
        <div className="w-100 ps-2">
          <Skeleton count={2} />
        </div>
      </div>
      <Skeleton className="rounded-10" height={300} />
      <Skeleton className="my-3" width="100%" height={30} />
      <div className="comment_input d-flex mb-1">
        <Skeleton circle height={36} width={36} />
        <div className="w-100 px-3">
          <Skeleton className="w-100" height={34} />
        </div>
        <Skeleton height={34} width={60} />
      </div>
    </div>
  );
}

export default LoadingCard;
