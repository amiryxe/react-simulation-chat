import React, { useContext, useState } from "react";
import MainContext from "../context/mainContext";
import { Modal, Input, Checkbox } from "antd";

const ModalSetting = ({ userName, visible, setVisible, userType }) => {
  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }

  const { setSenderUserName, setReceiverUserName } = useContext(MainContext);

  const [userNameText, setUserNameText] = useState(userName);

  const plainOptions = ["Green", "Cyan", "Orange"];

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
    </Modal>
  );
};

export default ModalSetting;
