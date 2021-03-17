import React, { useState, useContext } from "react";
import ChatBox from "../components/ChatBox";
import { Row, Col, Layout, Typography } from "antd";
import Pattern from "../assets/img/pattern.png";
import MainContext from "../context/mainContext";

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
  } = useContext(MainContext);

  return (
    <div className="container">
      <Layout style={{ padding: "3rem", background: "transparent" }}>
        <Title style={{ margin: "2rem 0", textAlign: "center", color: "#fff" }}>
          React Simulation Chat
        </Title>
        <Row>
          <Col md={1} lg={8} xl={12} align="middle">
            <ChatBox
              userType="send"
              userName={senderUserName}
              color="Cyan"
              background={{ pattern: Pattern, color: senderBgColor }}
              messages={messages}
              setMessages={setMessages}
            />
          </Col>
          <Col md={1} lg={8} xl={12} align="middle">
            <ChatBox
              userType="receive"
              userName={receiverUserName}
              color="Green"
              background={{ pattern: Pattern, color: receiverBgColor }}
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
