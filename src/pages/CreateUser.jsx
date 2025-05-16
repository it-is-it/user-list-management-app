import UserForm from '../components/UserFrom';

function CreateUser() {
  const handleCreate = (values) => {
    console.log('Creating user with values:', values);
    // Call your create logic here
  };

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-semibold">Create New User</h2>
      <UserForm onFinish={handleCreate} />
    </div>
  );
}

export default CreateUser;
