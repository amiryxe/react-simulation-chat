import React, { useState, useContext } from "react";
import ChatBox from "../components/ChatBox/ChatBox";
import { Row, Col, Layout, Typography } from "antd";
import Pattern from "../assets/img/pattern.png";
import MainContext from "../context/mainContext";

import "./Chat.scss";

const { Title } = Typography;

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "send",
      text: "Hi!",
      time: "22:30 PM",
    },
    {
      id: 2,
      type: "send",
      text: "How are you?",
      time: "22:31 PM",
    },
    {
      id: 3,
      type: "receive",
      text: "Heyyy, Fine. Thanks...",
      time: "22:32 PM",
    },
  ]);

  const {
    senderUserName,
    receiverUserName,
    senderBgColor,
    receiverBgColor,
    receiverIsTyping,
    senderIsTyping,
  } = useContext(MainContext);

  return (
    <div className="container">
      <Layout style={{ padding: "3rem", background: "transparent" }}>
        <Title style={{ margin: "2rem 0", textAlign: "center", color: "#fff" }}>
          React Simulation Chat
          <p style={{ fontSize: '1rem' }}>unreal and simulation chat with reactjs</p>
        </Title>
        <Row>
          <Col md={24} lg={12} align="middle">
            <ChatBox
              userType="send"
              userName={senderUserName}
              friendName={receiverUserName}
              color="Cyan"
              background={{ pattern: Pattern, color: senderBgColor }}
              messages={messages}
              setMessages={setMessages}
              isTyping={receiverIsTyping}
            />
          </Col>
          <Col md={24} lg={12} align="middle">
            <ChatBox
              userType="receive"
              userName={receiverUserName}
              friendName={senderUserName}
              color="Green"
              background={{ pattern: Pattern, color: receiverBgColor }}
              messages={messages}
              setMessages={setMessages}
              isTyping={senderIsTyping}
            />
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default Chat;
