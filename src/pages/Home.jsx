import { Table, Tag, Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { initialUsers } from '../data/users';

const { Title, Paragraph } = Typography;

function Home() {
  const navigate = useNavigate();
  const users = initialUsers;

  const columns = [
    {
      title: 'User Name',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'User Type',
      dataIndex: 'userType',
      key: 'userType',
      render: (text) => (
        <Tag color={text === 'Admin User' ? 'green' : 'gold'}>{text}</Tag>
      ),
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            type="link"
            onClick={() => navigate(`/user/view/${record.userId}`)}
          >
            View
          </Button>
          <Button
            type="link"
            onClick={() => navigate(`/user/update/${record.userId}`)}
          >
            Edit
          </Button>
          <Button type="link" danger>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <Title level={2} className="!mb-2">
              User Management
            </Title>
            <Paragraph className="!mb-0 text-gray-600">
              View, add, edit, and manage users easily.
            </Paragraph>
          </div>
          <Button
            type="primary"
            size="large"
            className="border-blue-500 bg-blue-500 text-white hover:bg-white hover:text-blue-500"
            onClick={() => navigate('/user/create')}
          >
            Add New User
          </Button>
        </div>

        <Table
          columns={columns}
          dataSource={users}
          rowKey="userId"
          pagination={{ pageSize: 5 }}
          className="rounded-lg bg-white shadow-md"
        />
      </div>
    </div>
  );
}

export default Home;
