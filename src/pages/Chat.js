import React, { useState } from 'react';
import ChatBox from '../components/ChatBox';
import { Row, Col, Layout, Typography } from 'antd';
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

  return (
    <div className='container'>
      <Layout style={{ padding: '3rem', background: 'transparent' }}>
        <Title style={{ margin: '2rem 0', textAlign: 'center' }}>
          React Simulation Chat
        </Title>
        <Row>
          <Col span={12} justify='space-around' align='middle'>
            <ChatBox
              type='send'
              user='Amir'
              pic={{ character: 'A', color: 'Cyan' }}
              messages={messages}
              setMessages={setMessages}
            />
          </Col>
          <Col span={12} justify='space-around' align='middle'>
            <ChatBox
              type='receive'
              user='Sara'
              pic={{ character: 'S', color: 'Green' }}
              messages={messages}
              setMessages={setMessages}
            />
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default Chat;
