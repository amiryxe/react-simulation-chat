import React, { useState, useEffect, useContext } from "react";
import MessageList from "../components/MessageList";
import Emojis from "../components/Emojis";
import { formatAMPM } from "../util/time";
import { Button, Row, Col, Avatar, Card, Input, Tooltip, Popover } from "antd";
import { SmileOutlined, SettingOutlined } from "@ant-design/icons";
import ModalSetting from "../components/ModalSetting";
import Typing from "../components/elements/Typing";
import MainContext from "../context/mainContext";

const ChatBox = ({
  messages,
  setMessages,
  userType,
  userName,
  color,
  background,
}) => {
  const [visible, setVisible] = useState(false);

  const [showTyping, setShowTyping] = useState(false);

  const [currentMessage, setCurrentMessage] = useState("");

  const {
    selectedEmoji,
    setSelectedEmoji,
    messageText,
    setMessageText,
  } = useContext(MainContext);

  const sendMessageHandler = (e) => {
    e.preventDefault();

    if (currentMessage) {
      setMessages([
        ...messages,
        {
          id: Math.random(),
          type: userType === "send" ? "send" : "receive",
          text: currentMessage,
          time: formatAMPM(new Date()),
        },
      ]);

      setSelectedEmoji("");
    }

    setCurrentMessage("");
  };

  let isTypingTimer;

  const handleKeyUp = (e) => {
    isTypingTimer = setTimeout(() => {
      setShowTyping(false);
    }, 1000);
  };

  const messageChangeHandler = (e) => {
    setCurrentMessage(e.target.value);

    setShowTyping(true);

    clearTimeout(isTypingTimer);
  };

  useEffect(() => {
    document.querySelectorAll(".messages").forEach((item) => {
      item.scrollTop = item.scrollHeight;
    });
  }, [messages]);

  return (
    <Card
      extra={
        <div>
          <Avatar
            style={{
              color: `dark${color}`,
              backgroundColor: `light${color}`,
              marginRight: "0.5rem",
            }}
          >
            {userName[0].toUpperCase()}
          </Avatar>

          <span style={{ position: "relative" }}>
            {userName}
            <Typing visible={showTyping} />
          </span>

          <Button
            style={{ float: "right" }}
            shape="circle"
            icon={<SettingOutlined />}
            onClick={() => setVisible(true)}
          />
        </div>
      }
      bordered={false}
      style={{ width: 350 }}
    >
      <MessageList
        messages={messages}
        userType={userType}
        background={background}
      />

      {visible && (
        <ModalSetting
          userType={userType}
          userName={userName}
          color={color}
          visible={visible}
          setVisible={setVisible}
        />
      )}

      <div className="input-chat">
        <Row>
          <Col flex={2} style={{ textAlign: "left" }}>
            <Popover content={Emojis} title="Select Emoji" trigger="click">
              <Tooltip placement="bottom" title="Emoji">
                <Button shape="circle" icon={<SmileOutlined />} />
              </Tooltip>
            </Popover>
          </Col>

          <Col flex={10}>
            <form onSubmit={sendMessageHandler}>
              <Input
                onChange={(userType) => messageChangeHandler(userType)}
                onKeyUp={handleKeyUp}
                value={currentMessage}
                placeholder="Type a message..."
              />
            </form>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default ChatBox;
