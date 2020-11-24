import React from "react";
import ProfilePicture from "../../../assets/profile-picture.jpg";
import Coins from "../Coins/Coins";
import "./RankCard.css";

const RankCard = (props) => {
  return (
    <div className="RankCard">
      <div className="RankCardProfile">
        <img src={ProfilePicture} alt="profile" />
        <div className="RankCardInfo">
          <h3>Emili Johnson</h3>
          <span>@emjohnson</span>
        </div>
      </div>
      <Coins />
      <span>#1</span>
    </div>
  );
};

export default RankCard;
