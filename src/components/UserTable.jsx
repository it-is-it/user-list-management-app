// components/UserTable.jsx
import { Table, Tag, Button, Popconfirm } from 'antd';
import { useNavigate } from 'react-router-dom';

const UserTable = ({ users, onDelete }) => {
  const navigate = useNavigate();

  const columns = [
    { title: 'User Name', dataIndex: 'userName' },
    { title: 'First Name', dataIndex: 'firstName' },
    { title: 'Last Name', dataIndex: 'lastName' },
    {
      title: 'User Type',
      dataIndex: 'userType',
      render: (type) => (
        <Tag color={type === 'Admin User' ? 'green' : 'gold'}>{type}</Tag>
      ),
    },
    { title: 'Department', dataIndex: 'department' },
    {
      title: 'Action',
      render: (_, record) => (
        <div className="flex gap-2">
          <Button onClick={() => navigate(`/user/view/${record.id}`)}>
            View
          </Button>
          <Button onClick={() => navigate(`/user/update/${record.id}`)}>
            Edit
          </Button>
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => onDelete(record.id)}
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return <Table dataSource={users} columns={columns} rowKey="id" />;
};

export default UserTable;
