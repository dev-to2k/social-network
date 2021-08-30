import LeftSide from 'components/message/LeftSide';
import RightSide from 'components/message/RightSide';
import React from 'react';

function Conversation() {
  return (
    <div className="message d-flex mess_detail">
      <div className="col col-md-3 border-end left">
        <LeftSide />
      </div>

      <div className="col col-md-9 right">
        <RightSide />
      </div>
    </div>
  );
}

export default Conversation;
