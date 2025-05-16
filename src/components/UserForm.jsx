import { useState, useEffect } from "react";
import { Form, Input, Button, Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const { Option } = Select;

function UserForm({ initialValues = {}, onFinish, isDisabled }) {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEdit && initialValues) {
      // Set form fields from the user object passed as initialValues
      form.setFieldsValue(initialValues);
    } else {
      form.resetFields();
    }
  }, [initialValues, form, isEdit]);

  const handleFinish = async (values) => {
    setLoading(true);
    try {
      await onFinish({ ...values, id: isEdit ? parseInt(id, 10) : Date.now() });
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        preserve={false}
        disabled={isDisabled}
      >
        <Form.Item
          label="User Name"
          name="userName"
          rules={[{ required: true, message: "Please enter the user name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: "Please enter the first name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: "Please enter the last name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="User Type"
          name="userType"
          rules={[{ required: true, message: "Please select the user type" }]}
        >
          <Select>
            <Option value="Admin User">Admin User</Option>
            <Option value="System User">System User</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Department"
          name="department"
          rules={[{ required: true, message: "Please select the department" }]}
        >
          <Select>
            <Option value="Frontend">Frontend</Option>
            <Option value="Backend">Backend</Option>
            <Option value="QA">QA</Option>
            <Option value="Database">Database</Option>
            <Option value="DevOps">DevOps</Option>
            <Option value="HR">HR</Option>
            <Option value="Marketing">Marketing</Option>
            <Option value="Management">Management</Option>
            <Option value="Support">Support</Option>
          </Select>
        </Form.Item>
      </Form>
      <div style={{ marginTop: 16, padding: "16px", textAlign: "right" }}>
        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          form={form.getFieldInstance ? undefined : undefined}
          onClick={() => form.submit()}
        >
          {isEdit ? "Update User" : "Create User"}
        </Button>
        <Button style={{ marginLeft: 12 }} onClick={() => navigate("/")}>
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default UserForm;
