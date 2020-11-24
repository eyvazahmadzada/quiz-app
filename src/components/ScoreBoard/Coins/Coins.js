import React from "react";
import "./Coins.css";

const Coins = (props) => {
  return (
    <div className="Coins">
      <i
        className="fa fa-circle-o"
        aria-hidden="true"
        style={{ color: "#ECC464" }}
      ></i>
      <span>12.225</span>
    </div>
  );
};

export default Coins;
