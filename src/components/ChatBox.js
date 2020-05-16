import React, { useState, useEffect } from 'react';
import MessageList from '../components/MessageList';
import { Button, Row, Col, Avatar, Card, Input, Tooltip } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const ChatBox = ({ type, messages, setMessages, user, pic }) => {
  const [messageText, setMessageText] = useState('');

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  const sendMessageHandler = (e) => {
    e.preventDefault();

    if (messageText) {
      setMessages([
        ...messages,
        {
          id: Math.random(),
          type: type === 'send' ? 'send' : 'receive',
          text: messageText,
          time: formatAMPM(new Date()),
        },
      ]);
    }
    setMessageText('');
  };

  const messageChangeHandler = (e) => {
    setMessageText(e.target.value);
  };

  useEffect(() => {
    document.querySelectorAll('.messages').forEach((item) => {
      item.scrollTop = item.scrollHeight;
    });
  }, [messages]);

  return (
    <Card
      title={user}
      extra={
        <Avatar
          style={{
            color: `dark${pic.color}`,
            backgroundColor: `light${pic.color}`,
          }}
        >
          {pic.character}
        </Avatar>
      }
      bordered={false}
      style={{ width: 350 }}
    >
      <MessageList messages={messages} />

      <div className='input-chat'>
        <Row>
          <Col flex={2} style={{ textAlign: 'left' }}>
            <Tooltip title='Emoji'>
              <Button shape='circle' icon={<SmileOutlined />} />
            </Tooltip>
          </Col>

          <Col flex={10}>
            <form onSubmit={sendMessageHandler}>
              <Input
                onChange={messageChangeHandler}
                value={messageText}
                placeholder='Type a message...'
              />
            </form>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default ChatBox;
