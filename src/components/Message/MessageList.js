import React from 'react';
import MessageItem from './MessageItem';

const MessageList = ({ messages, userType, background }) => {
  return (
    <div
      className='messages'
      style={{ background: `url(${background.pattern}) ${background.color}` }}
    >
      {messages.map((item) => {
        return (
          <MessageItem
            key={item.id}
            type={item.type === userType ? 'message-send' : 'message-receive'}
            text={item.text}
            time={item.time}
            userType={userType}
          />
        );
      })}
    </div>
  );
};

export default MessageList;
