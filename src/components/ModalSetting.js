import React, { useContext, useState } from "react";
import MainContext from "../context/mainContext";
import { Modal, Input, Checkbox } from "antd";
import { SketchPicker } from "react-color";

const ModalSetting = ({ userName, visible, setVisible, userType }) => {
  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }

  const {
    setSenderUserName,
    setReceiverUserName,
    setSenderBgColor,
    setReceiverBgColor,
  } = useContext(MainContext);

  const [userNameText, setUserNameText] = useState(userName);

  const [bgColor, setBgColor] = useState("");

  const plainOptions = ["Green", "Cyan", "Orange"];

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
        Color:
        <div>
          <Checkbox.Group
            options={plainOptions}
            defaultValue={["Green"]}
            onChange={onChange}
          />
        </div>
      </div>

      <SketchPicker color={bgColor} onChange={handleChangeComplete} />
    </Modal>
  );
};

export default ModalSetting;
