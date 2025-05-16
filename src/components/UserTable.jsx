import { Table, Tag, Button, Modal } from "antd";
import { HiSquare2Stack, HiPencil, HiTrash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const UserTable = ({ users, onDelete }) => {
  const navigate = useNavigate();
  const [deletingUserId, setDeletingUserId] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showDeleteConfirm = (userId) => {
    setDeletingUserId(userId);
    setIsModalVisible(true);
  };

  const handleDeleteConfirm = () => {
    onDelete(deletingUserId);
    setIsModalVisible(false);
    setDeletingUserId(null);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setDeletingUserId(null);
  };

  const columns = [
    { title: "User Name", dataIndex: "userName" },
    { title: "First Name", dataIndex: "firstName" },
    { title: "Last Name", dataIndex: "lastName" },
    {
      title: "User Type",
      dataIndex: "userType",
      render: (type) => (
        <Tag color={type === "Admin User" ? "green" : "gold"}>{type}</Tag>
      ),
    },
    { title: "Department", dataIndex: "department" },
    {
      title: "Action",
      align: "center",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button onClick={() => navigate(`/user/view/${record.id}`)}>
            <HiSquare2Stack />
            View
          </Button>
          <Button onClick={() => navigate(`/user/edit/${record.id}`)}>
            <HiPencil />
            Edit
          </Button>
          <Button danger onClick={() => showDeleteConfirm(record.id)}>
            <HiTrash />
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <Table
        dataSource={users}
        columns={columns}
        rowKey="id"
        pagination={{
          pageSize: 5,
          position: ["bottomCenter"],
        }}
      />

      <Modal
        title="Confirm Deletion"
        open={isModalVisible}
        onOk={handleDeleteConfirm}
        onCancel={handleCancel}
        okText="Yes"
        cancelText="No"
        centered
        maskClosable={false}
      >
        <p>Are you sure you want to delete this user?</p>
      </Modal>
    </>
  );
};

export default UserTable;
