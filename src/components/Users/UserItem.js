import React, { useState } from "react";
import PopUpModal from "../UI/PopUpModal";
import Card from "../UI/Card";
import classes from "./UserItem.module.css";

const UserItem = (props) => {
  const [popUp, setpopUp] = useState(false);
  const deleteItem = () => {
    setpopUp(true);
  };

  const deleteHandler = () => {
    props.onDeleteItem(props.id);
  };

  const cancelHandler = () => {
    setpopUp(false);
  };

  return (
    <React.Fragment>
      {popUp && (
        <PopUpModal
          title="Delete Data"
          message="Are you want sure to delete data?"
          ondelete={deleteHandler}
          onCancel={cancelHandler}
        />
      )}
      <Card className={`${classes.usersList} ${props.className}`}>
        <ul>
          <li onClick={deleteItem}>{props.children}</li>
        </ul>
      </Card>
    </React.Fragment>
  );
};

export default UserItem;
