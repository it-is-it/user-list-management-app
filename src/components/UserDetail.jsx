import { Descriptions, Button } from "antd";
import { useParams, useNavigate } from "react-router-dom";

const UserDetail = ({ users }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((u) => u.id === parseInt(id));

  if (!user) return <p>User not found</p>;

  return (
    <div className="p-4">
      <Descriptions title="User Info" bordered column={1}>
        <Descriptions.Item label="User Name">{user.userName}</Descriptions.Item>
        <Descriptions.Item label="First Name">
          {user.firstName}
        </Descriptions.Item>
        <Descriptions.Item label="Last Name">{user.lastName}</Descriptions.Item>
        <Descriptions.Item label="User Type">{user.userType}</Descriptions.Item>
        <Descriptions.Item label="Department">
          {user.department}
        </Descriptions.Item>
      </Descriptions>

      <div className="mt-4">
        <Button type="primary" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default UserDetail;
