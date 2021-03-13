import React, { useContext, useState } from "react";
import MainContext from "../context/mainContext";
import { Modal, Input, Checkbox } from "antd";
import { ChromePicker } from "react-color";

const ModalSetting = ({ userName, visible, setVisible, userType }) => {
  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }

  const { setSenderUserName, setReceiverUserName } = useContext(MainContext);

  const [userNameText, setUserNameText] = useState(userName);

  const [bgColor, setBgColor] = useState(userName);

  const plainOptions = ["Green", "Cyan", "Orange"];

  const handleChangeComplete = (color) => {
    setBgColor(color.hex);
  };

  const handleOk = (e) => {
    if (userType === "send") {
      setSenderUserName(userNameText);
    } else if (userType === "receive") {
      setReceiverUserName(userNameText);
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

      <ChromePicker color={bgColor} onChangeComplete={handleChangeComplete} />
    </Modal>
  );
};

export default ModalSetting;
