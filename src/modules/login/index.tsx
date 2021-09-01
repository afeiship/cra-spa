import { Avatar, Button, Form, FormInstance } from 'antd';
import { createRef } from 'react';
import ReactFullImage from '@jswork/react-full-image';

const meta = {
  fields: [
    { key: 'username', label: '用户名', required: true },
    { key: 'password', label: '密码', widget: 'password', required: true },
  ],
};

export const Login = () => {
  const formRef = createRef<FormInstance>();

  const handleFinish = (e) => {
    console.log('submit:', e);
  };

  return (
    <View relative h100>
      <ReactFullImage
        animation="blur"
        src="https://img.alicdn.com/tps/TB1h9xxIFXXXXbKXXXXXXXXXXXX.jpg"
      />
      <View
        p={20}
        pb={0}
        w={500}
        plugin="transform-center:xy; shadow: 3;"
        bg={'rgba(255,255,255,0.9)'}
        t={375}
        radius={5}
        usn>
        <View as="h3" tc>
          Admin Panel
        </View>
        <Form autoComplete="off" ref={formRef} onFinish={handleFinish}>
          <nx.$rc.fb form={formRef} meta={meta} />
          <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
            <View spx={10}>
              <Button htmlType="submit" type="primary">
                登录
              </Button>
              <Button onClick={() => formRef.current?.resetFields()}>重新来~</Button>
            </View>
          </Form.Item>
        </Form>
      </View>
    </View>
  );
};
