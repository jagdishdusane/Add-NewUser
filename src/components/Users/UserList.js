import React from "react";

import UserItem from "./UserItem";

const UserList = (props) => {
  return (
    <React.Fragment>
      {props.users.map((item) => (
        <UserItem key={item.id} id={item.id} onDeleteItem={props.onDelete}>
          {item.user} ({item.age} year old)
        </UserItem>
      ))}
    </React.Fragment>
  );
};

export default UserList;
