import { useNavigate, useParams } from "react-router-dom";
import { Typography, Card, Avatar, Button, message } from "antd";
import { UserOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import UserForm from "../components/UserForm";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const { Title, Text } = Typography;

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Get users and updateUser function from context
  const { users, updateUser } = useContext(UserContext);

  // Find user from context state, parse id to int for comparison
  const user = users.find((u) => u.id === parseInt(id, 10));

  if (!user) return <p>User not found</p>;

  const handleSubmit = (updatedUser) => {
    updateUser(updatedUser); // Update in context state
    message.success("User updated successfully!");
    navigate("/");
  };

  // Utility: Get initials for Avatar
  const getInitials = (firstName, lastName) =>
    `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <Button icon={<ArrowLeftOutlined />} onClick={() => navigate("/")}>
          Back
        </Button>
        <Title level={3} className="!mb-0">
          Edit User
        </Title>
        <div></div>
      </div>

      <Card
        variant="outlined"
        className="shadow-md"
        style={{ borderRadius: "10px" }}
      >
        <div className="flex items-center gap-4 mb-6">
          <Avatar size={64} icon={<UserOutlined />}>
            {getInitials(user.firstName, user.lastName)}
          </Avatar>
          <div>
            <Text strong className="text-lg">
              {user.firstName} {user.lastName}
            </Text>
            <div className="text-gray-500 text-sm">{user.userType}</div>
          </div>
        </div>

        <UserForm
          initialValues={user}
          onFinish={handleSubmit}
          isDisabled={false}
        />
      </Card>
    </div>
  );
}

export default EditUser;
