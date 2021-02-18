import Recat from "react";
import { connect } from "react-redux";
import Person from "../../Person/Person";

const search = (props) => {
  const onChangeHandler = (event) => {
    let filteredPerson = props.persons
      .filter(
        (per) => per.name.toUpperCase() === event.target.value.toUpperCase()
      )
      .map((person) => {
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
    props.search(filteredPerson);
  };
  return (
    <input
      type="text"
      onChange={onChangeHandler}
      placeholder="Search"
      style={{ borderRadius: "5px" }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    persons: state.personRed.persons,
  };
};

export default connect(mapStateToProps)(search);
