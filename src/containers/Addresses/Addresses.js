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
      <React.Fragment>
        <div
          className={cssClasses}
          title="Click to see those address"
          data-toggle="modal"
          data-target="#loginModal"
        >
          <div>Id:{add.id}</div>
          <div>Street:{add.street}</div>
          <div>Zipcode:{add.zipcode}</div>
          <div>Country:{add.country}</div>
        </div>
        <div className="container">
          <div className="modal" id="loginModal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Full Address</h5>
                  <button className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label for="username">Username</label>
                      <input
                        type="text"
                        placeholder="Username"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label for="password">Password</label>
                      <input
                        type="text"
                        placeholder="Password"
                        className="form-control"
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" data-dismiss="modal">
                    Close
                  </button>
                  <button className="btn btn-info" data-dismiss="modal">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
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
