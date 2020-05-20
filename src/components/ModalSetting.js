import React, { useState, useContext } from 'react';
import { Modal, Input, Checkbox } from 'antd';
import MainContext from '../context/mainContext';

const ModalSetting = (props) => {
  function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

  const plainOptions = ['Green', 'Cyan', 'Orange'];
  const options = [
    { label: 'Green', value: 'Green' },
    { label: 'Cyan', value: 'Cyan' },
    { label: 'Orange', value: 'Orange' },
  ];
  const optionsWithDisabled = [
    { label: 'Green', value: 'Green' },
    { label: 'Cyan', value: 'Cyan' },
    { label: 'Orange', value: 'Orange', disabled: false },
  ];

  const { userName, color } = props;
  const { visible, setVisible } = useContext(MainContext);

  const handleOk = (e) => {
    setVisible(false);
  };

  const handleCancel = (e) => {
    setVisible(false);
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
          <Input placeholder='Name of user' defaultValue={userName} />
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
          <br />
          <br />
          <Checkbox.Group
            options={options}
            defaultValue={['Cyan']}
            onChange={onChange}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ModalSetting;
