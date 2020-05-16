import React from 'react';
import { Button, Row, Col, Avatar, Card, Layout, Input, Tooltip } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const Chat = () => {
  return (
    <div className='container'>
      <Layout style={{ padding: '0 50px', background: 'transparent' }}>
        <Row>
          <Col span={12}>
            <Card
              title='Amir'
              extra={
                <Avatar
                  style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
                >
                  U
                </Avatar>
              }
              bordered={false}
              style={{ width: 350 }}
            >
              <div className='messages'>
                <p>text</p>

                <p>text</p>
              </div>

              <div className='input-chat'>
                <Row>
                  <Col flex={2} style={{ textAlign: 'left' }}>
                    <Tooltip title='Emoji'>
                      <Button shape='circle' icon={<SmileOutlined />} />
                    </Tooltip>
                  </Col>

                  <Col flex={10}>
                    <Input placeholder='Type a message...' />
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
          <Col span={12}>
            <Button type='danger'>Button 2</Button>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default Chat;
