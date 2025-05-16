import { useContext } from "react";
import UserForm from "../components/UserForm";
import { UserContext } from "../context/UserContext";
import { message } from "antd";

function CreateUser() {
  const { createUser } = useContext(UserContext);

  const handleSubmit = (user) => {
    createUser(user);
    message.success("User created successfully");
  };

  return (
    <UserForm
      initialValues={{}} // empty for create
      onFinish={handleSubmit}
      isDisabled={false}
    />
  );
}

export default CreateUser;
