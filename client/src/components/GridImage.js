/* eslint-disable react/prop-types */
import React from 'react';
import Photogrid from 'react-facebook-photo-grid';

function GridImage({ images }) {
  const data = images.map((img) => img.url);
  return (
    <>
      <Photogrid images={data} />
    </>
  );
}

export default GridImage;
