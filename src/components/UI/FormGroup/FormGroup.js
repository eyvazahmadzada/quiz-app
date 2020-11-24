import React from "react";
import "./FormGroup.css";

const FormGroup = (props) => {
  return (
    <div className="FormGroup">
      <label htmlFor={props.name}>{props.label}</label>
      <input type={props.type} id={props.name} />
    </div>
  );
};

export default FormGroup;
