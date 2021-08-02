import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [user, setUser] = useState({
    username: "",
    age: "",
    id: Math.random().toString(),
  });
  const [isValid, setIsValid] = useState(true);
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (user.username.trim().length === 0 || user.age.trim().length === 0)
      setIsValid(false);
    if (+user.age < 1) return;
    if (isNaN(user.age)) return;
    props.onAddUser(user);
    setUser({ username: "", age: "", id: Math.random().toString() });
  };
  const onInputChange = (e) => {
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
    <>
      <ErrorModal title="An Error Occured" message="Something went wrong" />
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
          <input
            id="age"
            type="text"
            onChange={onInputChange}
            value={user.age}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
