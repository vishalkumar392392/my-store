import React, { useEffect, useReducer } from "react";
import axios from "../../axios";
import classes from "./Address.module.css";

const addressReducer = (currentState, action) => {
  switch (action.type) {
    case "SET_ADDRESS":
      return [...action.addresses];
    default:
      return currentState;
  }
};
function Addresses(props) {
  const [addresses, dispatch] = useReducer(addressReducer, []);

  useEffect(() => {
    axios.get("/address").then((res) => {
      dispatch({ type: "SET_ADDRESS", addresses: res.data });
    });
  }, []);
  console.log(addresses);
  const cssClasses = [classes.Address].join(" ");
  const address = addresses.map((add) => {
    return (
      <div className={cssClasses}>
        <div>Id:{add.id}</div>
        <div>Street:{add.street}</div>
        <div>Zipcode:{add.zipcode}</div>
        <div>Country:{add.country}</div>
      </div>
    );
  });
  return (
    <div>
      <h3>Address</h3>
      {address}
    </div>
  );
}

export default Addresses;
