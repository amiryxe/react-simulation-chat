import React from 'react';

const MessageItem = ({ type, text, time }) => {
  return (
    <span className={`message-card ${type}`}>
      <p>{text}</p>
      <p className='message-time'>{time}</p>
    </span>
  );
};

export default MessageItem;
