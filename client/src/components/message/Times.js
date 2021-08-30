/* eslint-disable react/prop-types */
import React from 'react';

function Times({ total }) {
  return (
    <div>
      <span>
        {parseInt(total / 3600, 10).toString().length < 2
          ? `0${parseInt(total / 3600, 10)}`
          : parseInt(total / 3600, 10)}
      </span>
      <span>:</span>

      <span>
        {parseInt(total / 60, 10).toString().length < 2 ? `0${parseInt(total / 60, 10)}` : parseInt(total / 60, 10)}
      </span>
      <span>:</span>

      <span>{(total % 60).toString().length < 2 ? `0${total % 60}s` : `${total % 60}s`}</span>
    </div>
  );
}

export default Times;
