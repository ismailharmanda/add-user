import React from "react";

const AddUser = (props) => {
  const onSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmitForm}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age</label>
      <input id="age" type="text" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
