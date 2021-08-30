/* eslint-disable react/prop-types */
import React from 'react';

export default function Toast({ msg, handleShow, bgColor }) {
  const design = {
    top: '5px',
    right: '5px',
    minWidth: '200px',
    zIndex: 50,
  };

  return (
    <div className={`toast show position-fixed text-light ${bgColor}`} style={design}>
      <div className={`toast-header text-light d-flex justify-content-between ${bgColor}`}>
        <strong className="text-light ms-1">{msg.title}</strong>
        <button
          type="button"
          className="ms-3 mb-1 text-white"
          data-dismiss="toast"
          style={{ border: 'none', background: 'transparent' }}
          onClick={handleShow}
        >
          <i className="fas fa-times" />
        </button>
      </div>
      <div className="toas-body p-3">{msg.body}</div>
    </div>
  );
}
