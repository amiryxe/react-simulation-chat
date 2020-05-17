import React from 'react';
import { Button } from 'antd';

const EmojiItem = ({ emoji }) => {
  return (
    <li>
      <Button type='link' size='large' style={{ padding: '5px' }}>
        {emoji}
      </Button>
    </li>
  );
};

export default EmojiItem;
