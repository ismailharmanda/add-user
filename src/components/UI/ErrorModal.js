import React from "react";
import Card from "./Card";
import Button from "./Button";
import ReactDOM from "react-dom";

import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.hideModal}></div>;
};
const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.hideModal}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop hideModal={props.hideModal} />,
        document.querySelector("#backdrop-root")
      )}
    </>
  );
};

export default ErrorModal;
