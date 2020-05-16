import React, { useState, useEffect } from 'react';
import MessageList from '../components/MessageList';
import {
  Button,
  Row,
  Col,
  Avatar,
  Card,
  Layout,
  Input,
  Tooltip,
  Typography,
} from 'antd';
import { SmileOutlined } from '@ant-design/icons';
const { Title } = Typography;

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'send',
      text: 'Text of message 1',
      time: '22:30 PM',
    },
    {
      id: 2,
      type: 'receive',
      text: 'Text of message 2',
      time: '22:31 PM',
    },
    {
      id: 3,
      type: 'send',
      text: 'Text of message 3',
      time: '22:32 PM',
    },
  ]);

  const [messageText, setMessageText] = useState('');

  const sendMessageHandler = (e) => {
    e.preventDefault();

    if (messageText) {
      setMessages([
        ...messages,
        {
          id: Math.random(),
          type: 'send',
          text: messageText,
          time: '12:12',
        },
      ]);
    }
    setMessageText('');
  };

  const messageChangeHandler = (e) => {
    setMessageText(e.target.value);
  };

  useEffect(() => {
    document.querySelector('.messages').scrollTop = document.querySelector(
      '.messages'
    ).scrollHeight;
  }, [messages]);

  return (
    <div className='container'>
      <Layout style={{ padding: '3rem', background: 'transparent' }}>
        <Title style={{ margin: '2rem 0' }}>React Simulation Chat</Title>
        <Row>
          <Col span={12}>
            <Card
              title='Amir'
              extra={
                <Avatar
                  style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
                >
                  A
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
          </Col>
          <Col span={12}>
            <Button type='danger'>Button 2</Button>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default Chat;
