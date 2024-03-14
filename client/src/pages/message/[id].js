import AiChatContainter from 'components/message/AiChatContainter';
import LeftSide from 'components/message/LeftSide';
import RightSide from 'components/message/RightSide';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function Conversation() {
  const { bot } = useSelector((state) => state);
  const { activeBot, isBotChat } = bot;
  const { id } = useParams();
  return (
    <div className="message d-flex mess_detail">
      <div className="col col-md-3 border-end left">
        <LeftSide isAIChat={isBotChat} />
      </div>

      {id === activeBot._id ? (
        <div className="col col-md-9 right">
          {' '}
          <AiChatContainter />
        </div>
      ) : (
        <div className="col col-md-9 right">
          {' '}
          <RightSide />
        </div>
      )}
    </div>
  );
}

export default Conversation;
