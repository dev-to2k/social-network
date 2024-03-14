import LeftSide from 'components/message/LeftSide';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { BOT_TYPES } from 'redux/actions/botAction';

function Message() {
  const { bot } = useSelector((state) => state);
  const { isBotChat } = bot;

  return (
    <div className="message row">
      <div className="col-md-3 border-end left_mess">
        <LeftSide isAIChat={isBotChat} />
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
