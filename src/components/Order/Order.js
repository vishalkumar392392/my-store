import React from "react";
import classes from "./Order.module.css";
const order = (props) => {
  return (
    <div className={classes.Order}>
      <strong>Items:</strong>
      <span>{props.ingredients}</span>
      <br />
      <strong>Price:</strong>
      <span>{props.price}</span>
      <br />
      <strong>Delivery:</strong>
      <span>{props.delivery}</span>
    </div>
  );
};

export default order;
