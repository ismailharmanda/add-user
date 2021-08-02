import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [users, setUsers] = useState([]);
  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUser} />
      <UsersList users={users} />
    </div>
  );
};

export default App;
