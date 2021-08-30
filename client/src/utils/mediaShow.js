import React from 'react';

export const imageShow = (src) => <img src={src} alt="images" className="rounded-3 img-fluid" />;

export const videoShow = (src) => (
  <video controls src={src} alt="images" className="rounded-3">
    <track kind="captions" />
  </video>
);
