import LeftSide from 'components/message/LeftSide';
import React from 'react';

function Message() {
  return (
    <div className="message row">
      <div className="col-md-3 border-end left_mess">
        <LeftSide />
      </div>
      <div className="col-md-9 right_mess">
        <div className="d-flex justify-content-center align-items-center flex-column h-100">
          <i className="fab fa-facebook-messenger text-primary" style={{ fontSize: '5rem' }} />
          <h4>Messenger</h4>
        </div>
      </div>
    </div>
  );
}

export default Message;
