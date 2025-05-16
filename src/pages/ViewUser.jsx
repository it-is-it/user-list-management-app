// components/UserForm.jsx
import { Form, Input, Select, Button } from 'antd';

const UserForm = ({ onFinish, initialValues, isDisabled }) => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={initialValues}
    >
      <Form.Item
        name="firstName"
        label="First Name"
        rules={[{ required: true }]}
      >
        <Input disabled={isDisabled} />
      </Form.Item>
      <Form.Item name="lastName" label="Last Name" rules={[{ required: true }]}>
        <Input disabled={isDisabled} />
      </Form.Item>
      <Form.Item name="userName" label="User Name" rules={[{ required: true }]}>
        <Input disabled={isDisabled} />
      </Form.Item>
      <Form.Item name="userType" label="User Type" rules={[{ required: true }]}>
        <Select disabled={isDisabled}>
          <Select.Option value="Admin User">Admin User</Select.Option>
          <Select.Option value="System User">System User</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="department"
        label="Department"
        rules={[{ required: true }]}
      >
        <Select disabled={isDisabled}>
          <Select.Option value="Frontend">Frontend</Select.Option>
          <Select.Option value="Backend">Backend</Select.Option>
          <Select.Option value="QA">QA</Select.Option>
          <Select.Option value="Marketing">Marketing</Select.Option>
        </Select>
      </Form.Item>

      {!isDisabled && (
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      )}
    </Form>
  );
};

export default UserForm;
