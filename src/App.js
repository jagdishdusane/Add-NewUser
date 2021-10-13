import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
const App = () => {
  const [userData, setUserData] = useState([]);

  const formDataHandler = (uName, uAge) => {
    setUserData((prevData) => {
      return [
        ...prevData,
        { user: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  const deleteItemHandler = (uID) => {
    setUserData((prevData) => {
      const updatedData = prevData.filter((uItem) => uItem.id !== uID);
      return updatedData;
    });
  };
  return (
    <React.Fragment>
      <AddUser userHandler={formDataHandler} />
      <UserList users={userData} onDelete={deleteItemHandler} />
    </React.Fragment>
  );
};

export default App;
