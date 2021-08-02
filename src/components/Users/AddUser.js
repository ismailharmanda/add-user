import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [user, setUser] = useState({ username: "", age: "" });
  const onSubmitForm = (e) => {
    e.preventDefault();
    setUser({ username: "", age: "" });
  };
  const onInputChange = (e) => {
    console.log(user);
    e.target.id === "username" &&
      setUser((prev) => {
        return { ...prev, username: e.target.value };
      });
    e.target.id === "age" &&
      setUser((prev) => {
        return { ...prev, age: e.target.value };
      });
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={onInputChange}
          value={user.username}
        />
        <label htmlFor="age">Age</label>
        <input id="age" type="text" onChange={onInputChange} value={user.age} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
