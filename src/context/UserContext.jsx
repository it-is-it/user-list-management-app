import { createContext, useState, useEffect } from "react";
import initialUsers from "../data/users";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : initialUsers;
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const createUser = (newUser) => {
    setUsers((prev) => [...prev, { ...newUser, id: Date.now() }]);
  };

  const updateUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <UserContext.Provider
      value={{ users, createUser, setUsers, updateUser, deleteUser }}
    >
      {children}
    </UserContext.Provider>
  );
}
