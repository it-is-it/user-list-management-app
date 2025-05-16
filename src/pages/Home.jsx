import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserTable from "../components/UserTable";
import { UserContext } from "../context/UserContext";

const { Title, Paragraph } = Typography;

function Home() {
  const navigate = useNavigate();
  const { users, deleteUser } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 flex justify-center">
      <div className="max-w-6xl w-full">
        <div className="mb-8 flex flex-col md:flex-row items-center md:items-end justify-between">
          <div className="text-center md:text-left md:flex-1">
            <Title level={2} className="mb-1">
              User Management
            </Title>
            <Paragraph className="mb-0 text-gray-600 max-w-lg mx-auto md:mx-0">
              View, add, edit, and manage users easily.
            </Paragraph>
          </div>
          <div className="mt-4 md:mt-0">
            <Button
              type="primary"
              size="large"
              className="border-blue-500 bg-blue-500 text-white hover:bg-white hover:text-blue-500"
              onClick={() => navigate("/user/create")}
            >
              Add New User
            </Button>
          </div>
        </div>

        <UserTable users={users} onDelete={deleteUser} />
      </div>
    </div>
  );
}
export default Home;
