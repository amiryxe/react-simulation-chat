import React from 'react';
import { Modal, Input } from 'antd';

const ModalSetting = () => {
  return (
    <div>
      <Modal title='Setting' visible={true}>
        <p>
          <label>
            Name:
            <Input placeholder='Name of user' />
          </label>
        </p>
        {/* <p>Some contents...</p> */}
      </Modal>
    </div>
  );
};

export default ModalSetting;
