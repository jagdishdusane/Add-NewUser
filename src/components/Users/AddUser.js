import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import "./AddUser.module.css";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enterUserName, setUserName] = useState("");
  const [enterAge, setAge] = useState("");
  const [error, setError] = useState();

  const userChangeHandler = (e) => {
    setUserName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enterUserName.trim().length === 0 || enterAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Enter a Valid name and age (non-empty value)",
      });
      return;
    }
    if (+enterAge < 0) {
      setError({
        title: "Invalid Age",
        message: "Please Enter Valid Age ( > 0)",
      });
      return;
    }
    props.userHandler(enterUserName, enterAge);
    setUserName("");
    setAge("");
  };

  const onComfirmHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={onComfirmHandler}
        ></ErrorModal>
      )}
      <Card className={`${classes["input"]} ${error && classes.invalid}`}>
        <form onSubmit={addUserHandler}>
          <label>Username</label>
          <input
            type="text"
            id="username"
            value={enterUserName}
            onChange={userChangeHandler}
          />
          <label htmlFor="">Age(Year)</label>
          <input type="number" value={enterAge} onChange={ageChangeHandler} />
          <Button>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
