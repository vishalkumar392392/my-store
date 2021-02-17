import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/index";
import Order from "../../components/Order/Order";
import { Link } from "react-router-dom";
function Orders(props) {
  useEffect(() => {
    props.getOrders();
  }, []);

  const orders = props.orders.map((order) => {
    return (
      <Link
        to="/"
        key={order.id}
        style={{ color: "#fa923f", textDecoration: "none" }}
      >
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={order.price}
          delivery={order.delivery}
        />
      </Link>
    );
  });

  return <div>{orders}</div>;
}

const mapStateToProps = (state) => {
  return {
    orders: state.orderRed.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: () => dispatch(actionTypes.setOrders()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
