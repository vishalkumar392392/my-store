import axios from "../../axios";

export const setPersons = () => {
  return function (dispatch) {
    axios
      .get("/customers")
      .then((res) => {
        dispatch({ type: "SET_PERSONS", persons: res.data });
      })
      .catch((error) => console.log(error));
  };
};
