import React from "react";
import classes from "./Input.module.css";
const input = (props) => {
  let elements = null;

  const inputClasses = [classes.InputElement];
  if (props.inValid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  switch (props.elementType) {
    case "input":
      elements = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          onChange={props.change}
        />
      );
      break;
    case "select":
      elements = (
        <select
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.change}
        >
          {props.elementConfig.options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      elements = <input {...props.elementConfig} onChange={props.change} />;
  }
  return <div>{elements}</div>;
};

export default input;
