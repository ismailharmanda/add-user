import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const usernameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();
  const onSubmitForm = (e) => {
    e.preventDefault();
    const enteredUsername = usernameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age(non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid age(bigger than 0).",
      });
      return;
    }
    if (isNaN(+enteredAge) || !Number.isInteger(+enteredAge)) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid age(only integers).",
      });
      return;
    }
    props.onAddUser({
      username: enteredUsername,
      age: enteredAge,
      id: Math.random().toString(),
    });
    usernameInputRef.current.value = "";
    ageInputRef.current.value = "";
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
          <input id="username" type="text" ref={usernameInputRef} />
          <label htmlFor="age">Age</label>
          <input id="age" type="text" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
