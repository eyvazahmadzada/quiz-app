import React from "react";
import "./FormButton.css";

const FormButton = (props) => {
  return (
    <button className="FormButton" onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default FormButton;
