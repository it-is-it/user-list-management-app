import {
  Card,
  Descriptions,
  Typography,
  Avatar,
  Badge,
  Button,
  Popconfirm,
  message,
} from "antd";
import {
  UserOutlined,
  EditOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { HiTrash } from "react-icons/hi2";

const { Title, Text, Paragraph } = Typography;

function ViewUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, deleteUser } = useContext(UserContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const found = users.find((u) => u.id === Number(id));
    setUser(found);
  }, [users, id]);

  if (!user) return <Paragraph>Loading user...</Paragraph>;

  const handleDelete = () => {
    deleteUser(user.id); // ✅ Delete here only after confirmation
    message.success("User deleted successfully!");
    navigate("/");
  };

  const getInitials = (firstName, lastName) =>
    `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1">
          <Button icon={<ArrowLeftOutlined />} onClick={() => navigate("/")}>
            Back
          </Button>
        </div>
        <Title level={2} className="!text-blue-500 !mb-2 font-semibold">
          User Details
        </Title>
        <div className="flex-1" />
      </div>

      <Card className="shadow-md" style={{ borderRadius: "10px" }}>
        <div className="flex items-center gap-4 mb-6">
          <Avatar size={64} icon={<UserOutlined />}>
            {getInitials(user.firstName, user.lastName)}
          </Avatar>
          <div>
            <Text strong className="text-lg">
              {user.firstName} {user.lastName}
            </Text>
            <div>
              <Badge status="success" text="Active" />
            </div>
          </div>
        </div>

        <Descriptions column={1} bordered size="middle">
          <Descriptions.Item label="User Name">
            {user.userName}
          </Descriptions.Item>
          <Descriptions.Item label="First Name">
            {user.firstName}
          </Descriptions.Item>
          <Descriptions.Item label="Last Name">
            {user.lastName}
          </Descriptions.Item>
          <Descriptions.Item label="User Type">
            {user.userType}
          </Descriptions.Item>
          <Descriptions.Item label="Department">
            {user.department}
          </Descriptions.Item>
          <Descriptions.Item label="Created At">2024-05-01</Descriptions.Item>
          <Descriptions.Item label="Last Updated">2024-05-12</Descriptions.Item>
        </Descriptions>
      </Card>

      <div className="flex gap-3 mt-6 justify-end">
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={() => navigate(`/user/edit/${user.id}`)}
        >
          Edit
        </Button>

        <Popconfirm
          title="Are you sure to delete this user?"
          onConfirm={handleDelete}
          okText="Yes"
          cancelText="No"
        >
          <Button danger icon={<HiTrash />}>
            Delete User
          </Button>
        </Popconfirm>
      </div>
    </div>
  );
}

export default ViewUser;
