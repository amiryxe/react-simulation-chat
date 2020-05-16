import React from 'react';

const MessageItem = ({ type, text, time }) => {
  return (
    <span
      className={`message-card ${
        type === 'send' ? 'message-send' : 'message-receive'
      }`}
    >
      <p>{text}</p>
      <p className='message-time'>{time}</p>
    </span>
  );
};

export default MessageItem;
