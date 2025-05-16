import { Form, Input, Select, Button } from 'antd';

function UserFrom() {
  return (
    <Form
      layout="vertical"
      form={form}
      initialValues={initialValues}
      onFinish={onFinish}
      className="mx-auto max-w-xl rounded-lg bg-white p-6 shadow-md"
    >
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: 'First Name is required' }]}
      >
        <Input placeholder="Enter First Name" />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[{ required: true, message: 'Last Name is required' }]}
      >
        <Input placeholder="Enter Last Name" />
      </Form.Item>

      <Form.Item
        label="Username"
        name="userName"
        rules={[{ required: true, message: 'Username is required' }]}
      >
        <Input placeholder="Enter Username" />
      </Form.Item>

      <Form.Item
        label="User Type"
        name="userType"
        rules={[{ required: true, message: 'User Type is required' }]}
      >
        <Select placeholder="Select user type">
          <Option value="Admin User">Admin User</Option>
          <Option value="System User">System User</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Department"
        name="department"
        rules={[{ required: true, message: 'Department is required' }]}
      >
        <Select placeholder="Select department">
          <Option value="Frontend">Frontend</Option>
          <Option value="Backend">Backend</Option>
          <Option value="QA">QA</Option>
          <Option value="Marketing">Marketing</Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          {isEdit ? 'Update User' : 'Create User'}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default UserFrom;
