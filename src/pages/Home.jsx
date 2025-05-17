import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserTable from "../components/UserTable";
import { UserContext } from "../context/UserContext";
import { HiUserPlus } from "react-icons/hi2";

const { Title, Paragraph } = Typography;

function Home() {
  const navigate = useNavigate();
  const { users, deleteUser, resetUsers } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 flex justify-center">
      <div className="max-w-6xl w-full">
        <div className="mb-8 flex flex-col md:flex-row items-center md:items-end justify-between">
          <div className="text-center md:text-left md:flex-1">
            <Title level={2} className="!text-blue-500 !mb-2 font-semibold">
              User List Management WebApp
            </Title>
            <Paragraph className="mb-0 text-gray-600 max-w-lg mx-auto md:mx-0 md:ml-2">
              View, add, edit, and manage users easily.
            </Paragraph>
          </div>
          <div className="mt-4 md:mt-0">
            <Button
              type="primary"
              size="large"
              className="border-blue-500 bg-blue-500 text-white hover:bg-white hover:text-blue-500 transition-colors duration-300"
              onClick={() => navigate("/user/create")}
            >
              <HiUserPlus className="mr-2" />
              Add New User
            </Button>
          </div>
        </div>

        <UserTable users={users} onDelete={deleteUser} />

        <div className="mt-6 text-center">
          <Button
            danger
            size="large"
            className="hover:!bg-red-600 hover:!text-white"
            onClick={resetUsers}
          >
            Reset to Original Users
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
