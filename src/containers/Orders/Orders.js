import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/index";
import Order from "../../components/Order/Order";
function Orders(props) {
  useEffect(() => {
    props.getOrders();
  }, []);

  const orders = props.orders.map((order) => {
    return (
      <Order
        key={order.id}
        ingredients={order.ingredients}
        price={order.price}
        delivery={order.delivery}
      />
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
