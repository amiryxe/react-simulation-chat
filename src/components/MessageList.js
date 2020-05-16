import React from 'react';
import MessageItem from './MessageItem';

const MessageList = ({ messages }) => {
  return (
    <div className='messages'>
      {messages.map((item) => {
        return (
          <MessageItem
            key={item.id}
            type={item.type}
            text={item.text}
            time={item.time}
          />
        );
      })}
    </div>
  );
};

export default MessageList;
