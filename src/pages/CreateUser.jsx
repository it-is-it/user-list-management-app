import { useContext } from "react";
import UserForm from "../components/UserForm";
import { UserContext } from "../context/UserContext";
import { message, Typography, Card, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

function CreateUser() {
  const navigate = useNavigate();
  const { createUser } = useContext(UserContext);

  const handleSubmit = (user) => {
    createUser(user);
    message.success("User created successfully");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-stone-100 px-4 py-10">
      <div className="mx-auto max-w-2xl p-6 rounded-xl">
        {/* Header with back button and centered title */}
        <div className="relative mb-6 flex items-center justify-between">
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate("/")}
            className="mb-2"
          >
            Back
          </Button>
          <Title
            level={2}
            className="!text-blue-500 !mb-2 font-semibold absolute left-1/2 transform -translate-x-1/2"
          >
            Create New User
          </Title>
        </div>

        {/* User Card Form */}
        <Card className="shadow-lg border border-gray-100 rounded-2xl bg-white px-4 py-8">
          <div className="mb-8 text-center">
            <Paragraph className="text-gray-600">
              Please fill out the form below to add a new user to the system.
            </Paragraph>
          </div>

          <div className="px-2 md:px-8">
            <UserForm
              initialValues={{}}
              onFinish={handleSubmit}
              isDisabled={false}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default CreateUser;
