import React, { useEffect } from "react";
import { connect } from "react-redux";
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

  return <div>{persons}</div>;
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
