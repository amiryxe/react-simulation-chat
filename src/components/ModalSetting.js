import React from 'react';
import { Modal, Input, Checkbox } from 'antd';

const ModalSetting = () => {
  function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];
  const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
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
          <div>
            <Checkbox.Group
              options={plainOptions}
              defaultValue={['Apple']}
              onChange={onChange}
            />
            <br />
            <br />
            <Checkbox.Group
              options={options}
              defaultValue={['Pear']}
              onChange={onChange}
            />
          </div>
        </p>
      </Modal>
    </div>
  );
};

export default ModalSetting;
