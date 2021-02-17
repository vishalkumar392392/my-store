import axios from "../../axios";

export const addOrder = (orderForm) => {
  return function (dispatch) {
    const requestBody = {
      customer: {
        name: orderForm.name.value,
        email: orderForm.email.value,

        street: orderForm.street.value,
        zipCode: orderForm.zipcode.value,
        country: orderForm.country.value,
        delivery: orderForm.deliveryMethod.value,
      },
      price: orderForm.price.value,
      items: orderForm.item.value,
    };
    axios
      .post("/order", requestBody)
      .then((response) => {
        console.log(response);
        dispatch({ type: "ADD_ORDER" });
      })
      .catch((error) => console.log(error));
    return { type: "ADD_ORDER" };
  };
};

export const setOrders = () => {
  return function (dispatch) {
    axios
      .get("/order")
      .then((res) => {
        dispatch({ type: "SET_ORDERS", orders: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
