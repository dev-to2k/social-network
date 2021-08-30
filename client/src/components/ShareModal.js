/* eslint-disable react/prop-types */
import React from 'react';
import { FacebookIcon, FacebookShareButton } from 'react-share';

function ShareModal({ url }) {
  return (
    <div className="p-2">
      <FacebookShareButton url={url}>
        <FacebookIcon round size={24} />
        <span className="ms-2">Facebook</span>
      </FacebookShareButton>
    </div>
  );
}

export default ShareModal;
