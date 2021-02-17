import React from "react";
import classes from "./Person.module.css";
import { Link } from "react-router-dom";
const person = (props) => {
  const clickHandler = () => {
    console.log(props.id);
  };
  return (
    <div>
      <div className={classes.Person}>
        <strong>Name:</strong>
        <span>{props.name}</span>
        <br />
        <strong>Price:</strong>
        <span>{props.email}</span>
        <br />
        <strong>Number:</strong>
        <span>{props.number}</span>
        <br />
        <Link to={`/details/${props.id}`}>
          <button>All Orders</button>
        </Link>
      </div>
    </div>
  );
};

export default person;
