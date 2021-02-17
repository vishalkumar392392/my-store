import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import classes from "./Details.module.css";
import axios from "../../axios";

function Details(props) {
  const params = useParams();
  const filterPerson = props.persons.filter((per) => per.id == params.id);
  const [filteredOrders, setfilteredOrders] = useState([]);
  useEffect(() => {
    if (props.orders.length === 0) {
      axios
        .get("/order")
        .then((res) => {
          let filteredOrderss = [...res.data];
          setfilteredOrders(
            filteredOrderss.filter((order) => order.customer_id == params.id)
          );
        })
        .catch((error) => {});
    } else {
      setfilteredOrders(
        props.orders.filter((order) => order.customer_id == params.id)
      );
    }
  }, []);

  const person = filterPerson.map((person) => {
    return (
      <div key={person.id}>
        <div className={classes.Person}>
          <strong>Name:</strong>
          <span>{person.name}</span>
          <br />
          <strong>Price:</strong>
          <span>{person.email}</span>
          <br />
          <strong>Number:</strong>
          <span>{person.phoneNumber}</span>
        </div>
      </div>
    );
  });
  const orders = filteredOrders.map((order) => {
    return (
      <div key={order.id} className={classes.Order}>
        <strong>Items:</strong>
        <span>{order.ingredients}</span>
        <br />
        <strong>Price:</strong>
        <span>{order.price}</span>
        <br />
        <strong>Delivery:</strong>
        <span>{order.delivery}</span>
      </div>
    );
  });
  return (
    <div>
      {person}
      <div>{orders}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    persons: state.personRed.persons,
    orders: state.orderRed.orders,
  };
};

export default connect(mapStateToProps)(Details);
