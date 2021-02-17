import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import * as actionTypes from "../../store/actions/index";
import Person from "../../components/Person/Person";
import axios from "../../axios";

function Persons(props) {
  useEffect(() => {
    props.onSetPersons();
  }, []);

  const persons = props.persons.map((person) => {
    return (
      <Person
        key={person.id}
        id={person.id}
        name={person.name}
        email={person.email}
        number={person.phoneNumber}
      />
    );
  });

  const downloadSheet = () => {
    console.log("downloadsheet");
  };

  const download = (
    <div style={{ textAlign: "right", marginRight: "100px" }}>
      {/* <button>Customer Excelsheet</button> */}
      <div className="dropdown show">
        <a
          className="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Download
        </a>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a onClick={downloadSheet} href="#" className="dropdown-item">
            ExcelSheet
          </a>
          <a className="dropdown-item" href="#">
            Pdf
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {download}
      {persons}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    persons: state.personRed.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetPersons: () => dispatch(actionTypes.setPersons()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
