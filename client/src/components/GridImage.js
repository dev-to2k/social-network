/* eslint-disable react/prop-types */
import React from 'react';
import FbImageLibrary from 'react-fb-image-grid';

function GridImage({ images }) {
  const data = images.map((img) => img.url);
  return (
    <>
      <FbImageLibrary images={data} hideOverlay overlayBackgroundColor="#222222" />
    </>
  );
}

export default GridImage;
