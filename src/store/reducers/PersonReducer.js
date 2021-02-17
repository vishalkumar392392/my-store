const initialState = {
  persons: [],
};

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PERSONS":
      return { persons: [...action.persons] };

    default:
      return state;
  }
};

export default personReducer;
