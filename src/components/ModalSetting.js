import React, { useContext, useState } from "react";
import MainContext from "../context/mainContext";
import { Modal, Input, Button } from "antd";
import { SketchPicker } from "react-color";

const ModalSetting = ({ userName, visible, setVisible, userType }) => {
  const {
    setSenderUserName,
    setReceiverUserName,
    setSenderBgColor,
    setReceiverBgColor,
    senderBgColor,
    receiverBgColor,
  } = useContext(MainContext);

  const [userNameText, setUserNameText] = useState(userName);

  const [bgColor, setBgColor] = useState(
    userType == "send" ? senderBgColor : receiverBgColor
  );

  const [showColorPicker, setShowColorPicker] = useState(false);

  const HandleShowColorPicker = () => {
    showColorPicker ? setShowColorPicker(false) : setShowColorPicker(true);
  };

  const handleChangeComplete = (color) => {
    setBgColor(color.hex);
  };

  const handleOk = (e) => {
    if (userType === "send") {
      setSenderUserName(userNameText);
      setSenderBgColor(bgColor);
    } else if (userType === "receive") {
      setReceiverUserName(userNameText);
      setReceiverBgColor(bgColor);
    }

    setVisible(false);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  const handleChangeUserName = (e) => {
    setUserNameText(e.target.value);
  };

  const popover = {
    position: "absolute",
    zIndex: "2",
  };
  const cover = {
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
  };

  return (
    <Modal
      title="Setting"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div style={{ marginBottom: "1rem" }}>
        <label>
          Name:
          <Input
            placeholder="Name of user"
            defaultValue={userNameText}
            onChange={handleChangeUserName}
          />
        </label>
      </div>

      <div>
        Backgroud Color:
        <Button style={{ marginLeft: "1rem" }} onClick={HandleShowColorPicker}>
          <span
            style={{
              width: "3rem",
              height: "1.3rem",
              display: "block",
              background: bgColor,
            }}
          ></span>
        </Button>
        {showColorPicker && (
          <div style={popover}>
            <div style={cover} onClick={() => setShowColorPicker(false)} />
            <SketchPicker color={bgColor} onChange={handleChangeComplete} />
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ModalSetting;
