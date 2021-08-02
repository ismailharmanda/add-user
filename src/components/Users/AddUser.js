import React from "react";
import Card from "../UI/Card";

const AddUser = (props) => {
  const onSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <Card>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age</label>
        <input id="age" type="text" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
