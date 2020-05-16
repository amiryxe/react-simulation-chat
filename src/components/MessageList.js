import React from 'react';
import MessageItem from './MessageItem';

const MessageList = ({ messages, userType }) => {
  return (
    <div className='messages'>
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
