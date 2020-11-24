import React from "react";
import ProfilePicture from "../../../assets/profile-picture.jpg";
import Coins from "../Coins/Coins";
import "./TopCard.css";

const TopCard = (props) => {
  return (
    <div className="TopCard">
      <div className="TopCardImg">
        <img src={ProfilePicture} alt="profile" />
        <span>1</span>
      </div>
      <div className="TopCardInfo">
        <p>Emili Johnson</p>
        <span>@emjohnson</span>
      </div>
      <Coins />
    </div>
  );
};

export default TopCard;
