import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../../assests/download.jpg";

const navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light py-4 " id="main-nav">
        <div className="container">
          <a href="#home" className="navbar-brand">
            <img
              src={img}
              style={{ marginRight: "20px" }}
              width="50"
              height="50"
              alt=""
            />
            <h3 className="d-inline align-middle">MyStore</h3>
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/orders" className="nav-link">
                  Orders
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/customers" className="nav-link">
                  Customers
                </NavLink>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Address
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
