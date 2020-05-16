import React, { useState } from 'react';
import ChatBox from '../components/ChatBox';
import { Row, Col, Layout, Typography } from 'antd';
const { Title } = Typography;

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'send',
      text: 'Hi!',
      time: '22:30 PM',
    },
    {
      id: 2,
      type: 'send',
      text: 'How are you?',
      time: '22:31 PM',
    },
    {
      id: 3,
      type: 'receive',
      text: 'Heyyy, Fine. Thanks...',
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
          <Col span={12} align='middle'>
            <ChatBox
              userType='send'
              userName='Amir'
              color='Cyan'
              messages={messages}
              setMessages={setMessages}
            />
          </Col>
          <Col span={12} align='middle'>
            <ChatBox
              userType='receive'
              userName='Sara'
              color='Green'
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
