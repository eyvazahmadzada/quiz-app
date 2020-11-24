import React from "react";
import Photo from "../../../assets/user.png";
import "./UserPhoto.css";

const UserPhoto = (props) => {
  return (
    <img
      className="UserPhoto"
      onClick={props.clicked}
      src={Photo}
      alt="userPhoto"
    />
  );
};

export default UserPhoto;
