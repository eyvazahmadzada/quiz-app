import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import "./SideDrawer.css";

const SideDrawer = (props) => {
  let classes = ["SideDrawer", "Close"];

  if (props.show) {
    classes = ["SideDrawer", "Open"];
  }

  return (
    <div className={classes.join(" ")} onClick={props.clicked}>
      <ul className="NavItems">
        <NavigationItem to="/">Game</NavigationItem>
        <NavigationItem to="/offline">Play offline</NavigationItem>
        {/* <NavigationItem to="/scoreboard">Scoreboard</NavigationItem>
        <NavigationItem to="/register">Register</NavigationItem>
        <NavigationItem to="/login">Login</NavigationItem>
        <NavigationItem to="/profile">Profile</NavigationItem> */}
      </ul>
    </div>
  );
};

export default SideDrawer;
