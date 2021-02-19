import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/index";
import Person from "../../components/Person/Person";
import axios from "../../axios";
import Search from "../../components/UI/Search/Search";
function Persons(props) {
  const [filterPer, setFilterPer] = useState([]);

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
    axios({
      url: "/excel",
      method: "GET",
      responseType: "blob", // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Customers.xlsx"); //or any other extension
      document.body.appendChild(link);
      link.click();
    });
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
  const searchPersons = (value) => {
    if (value !== null) {
      setFilterPer(value);
    }
  };
  return (
    <div>
      <Search search={(value) => searchPersons(value)} />
      {download}
      {filterPer.length === 0 ? persons : filterPer}
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
