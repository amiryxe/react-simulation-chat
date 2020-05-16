import React from 'react';
import { Button, Row, Col, Avatar, Card, Layout } from 'antd';

const Chat = () => {
  return (
    <div className='container'>
      <Layout style={{ padding: '0 50px' }}>
        <Row>
          <Col span={12}>
            <Card title='Card title' bordered={false} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>

            <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
              U
            </Avatar>

            <Button type='primary'>Button 1</Button>
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
