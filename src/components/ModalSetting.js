import React, { useContext } from 'react';
import { Modal, Input, Checkbox } from 'antd';
import MainContext from '../context/mainContext';

const ModalSetting = ({ userType, userName, color, visible, setVisible }) => {
  function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

  const plainOptions = ['Green', 'Cyan', 'Orange'];
  const options = [
    { label: 'Green', value: 'Green' },
    { label: 'Cyan', value: 'Cyan' },
    { label: 'Orange', value: 'Orange' },
  ];

  const { setSenderUserName, setReceiverUserName } = useContext(MainContext);

  const handleOk = (e) => {
    setVisible(false);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  const handleChangeUserName = (e) => {
    // console.log(userType);
  };

  return (
    <Modal
      title='Setting'
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Name:
          <Input
            placeholder='Name of user'
            defaultValue={userName}
            onChange={handleChangeUserName}
          />
        </label>
      </div>

      <div>
        Color:
        <div>
          <Checkbox.Group
            options={plainOptions}
            defaultValue={['Green']}
            onChange={onChange}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ModalSetting;
