import React from "react";
import { NavLink } from "react-router-dom";
import "./ProfileItem.css";

const ProfileItem = (props) => {
  return (
    <div className="ProfileItem">
      <i
        className={"fa fa-" + props.icon}
        aria-hidden="true"
        style={{ color: props.color }}
      ></i>
      <li className="ProfileItemLink">
        <NavLink to={props.to} exact>
          {props.children}
        </NavLink>
      </li>
    </div>
  );
};

export default ProfileItem;
