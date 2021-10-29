import React, { useState, useEffect, useContext } from "react";
import MessageList from "../../components/Message/MessageList";
import Emojis from "../../components/Emoji/Emojis";
import { formatAMPM } from "../../util/time";
import { Button, Row, Col, Avatar, Card, Input, Tooltip, Popover } from "antd";
import { SmileOutlined, SettingOutlined } from "@ant-design/icons";
import ModalSetting from "./ModalSetting";
import Typing from "../../components/elements/Typing";
import MainContext from "../../context/mainContext";

const ChatBox = ({
  messages,
  setMessages,
  userType,
  userName,
  color,
  background,
  isTyping,
}) => {
  const [visible, setVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");

  const {
    selectedEmoji,
    setSelectedEmoji,
    setSenderIsTyping,
    setReceiverIsTyping,
  } = useContext(MainContext);

  // handle send messages
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

  // handle timer of typing status
  let isTypingTimer;
  const handleKeyUp = (e) => {
    isTypingTimer = setTimeout(() => {
      setSenderIsTyping(false);
      setReceiverIsTyping(false);
    }, 1000);
  };

  // handle write message in input and typing status
  const messageChangeHandler = (e, user) => {
    setCurrentMessage(e.target.value);

    if (user == "send") {
      setSenderIsTyping(true);
    } else {
      setReceiverIsTyping(true);
    }

    clearTimeout(isTypingTimer);
  };

  useEffect(() => {
    document.querySelectorAll(".messages").forEach((item) => {
      item.scrollTop = item.scrollHeight;
    });
  }, [messages]);

  useEffect(() => {
    setCurrentMessage(currentMessage + selectedEmoji);
    setSelectedEmoji("");
  }, [selectedEmoji]);

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
            <Typing visible={isTyping} />
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
                onChange={(e) => messageChangeHandler(e, userType)}
                onKeyUp={handleKeyUp}
                value={currentMessage}
                placeholder="Type a message..."
                autoFocus={userType === "send"}
              />
            </form>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default ChatBox;
