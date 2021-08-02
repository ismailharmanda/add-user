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
  const [error, setError] = useState();
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (user.username.trim().length === 0 || user.age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age(non-empty values).",
      });
      return;
    }
    if (+user.age < 1) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid age(bigger than 0).",
      });
      return;
    }
    if (isNaN(+user.age) || !Number.isInteger(+user.age)) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid age(only integers).",
      });
      return;
    }
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
  const hideModal = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          hideModal={hideModal}
          title={error.title}
          message={error.message}
        />
      )}
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
