import React from 'react';
import { Modal, Input, Checkbox } from 'antd';

const ModalSetting = () => {
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

  return (
    <div>
      <Modal title='Setting' visible={true}>
        <p>
          <label>
            Name:
            <Input placeholder='Name of user' />
          </label>
        </p>
        <p>
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
        </p>
      </Modal>
    </div>
  );
};

export default ModalSetting;
