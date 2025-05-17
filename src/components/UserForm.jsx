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
      form.setFieldsValue(initialValues);
    } else {
      form.resetFields();
    }
  }, [initialValues, form, isEdit]);

  const handleFinish = async (values) => {
    setLoading(true);
    try {
      await onFinish({
        ...values,
        id: isEdit ? parseInt(id, 10) : Date.now(),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Form Section */}
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
            rules={[
              { required: true, message: "Please enter the user name" },
              { min: 3, message: "User name must be at least 3 characters" },
              {
                whitespace: true,
                message: "User name cannot be empty or spaces only",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              { required: true, message: "Please enter the first name" },
              {
                pattern: /^[A-Za-z\s]+$/,
                message: "Only letters and spaces allowed",
              },
              { min: 2, message: "First name must be at least 2 characters" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              { required: true, message: "Please enter the last name" },
              {
                pattern: /^[A-Za-z\s]+$/,
                message: "Only letters and spaces allowed",
              },
              { min: 2, message: "Last name must be at least 2 characters" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="User Type"
            name="userType"
            rules={[
              { required: true, message: "Please select the user type" },
              { type: "string", message: "Invalid user type" },
            ]}
          >
            <Select placeholder="Select a user type">
              <Option value="Admin User">Admin User</Option>
              <Option value="System User">System User</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Department"
            name="department"
            rules={[
              { required: true, message: "Please select the department" },
              { type: "string", message: "Invalid department" },
            ]}
          >
            <Select placeholder="Select a department">
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
      </div>

      <div className="flex justify-end gap-3 px-4 pb-4">
        <Button type="primary" loading={loading} onClick={() => form.submit()}>
          {isEdit ? "Update User" : "Create User"}
        </Button>
        <Button onClick={() => navigate("/")}>Cancel</Button>
      </div>
    </>
  );
}

export default UserForm;
