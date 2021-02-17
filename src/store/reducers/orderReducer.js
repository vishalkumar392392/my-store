const initialState = {
  orders: [],
};

const orderReducer = (state = initialState, action) => {
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
