import React from "react";
import "./HomeButton.css";

const HomeButton = (props) => {
  return (
    <button className="HomeButton" onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default HomeButton;
