import React from "react";
import classes from "./Button.module.css";

const button = (props) => {
  console.log(props.disable);
  return (
    <div>
      <button className={classes.Button} disabled={props.disable}>
        Order
      </button>
    </div>
  );
};

export default button;
