import React from "react";
import { Link } from "react-router-dom";

const success = (props) => {
  return (
    <div>
      <h3>Order Placed successfully</h3>
      <Link to="/">OK</Link>
    </div>
  );
};

export default success;
