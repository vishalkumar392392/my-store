const initialState = {
  orders: [],
};

const orderReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_ORDERS":
      return {
        orders: [...action.orders],
      };
    default:
      return state;
  }
};

export default orderReducer;
