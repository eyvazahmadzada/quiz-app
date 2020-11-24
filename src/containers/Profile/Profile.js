import React, { Component } from "react";
import ProfileItem from "../../components/ProfileItem/ProfileItem";
import UserPhoto from "../../components/UI/UserPhoto/UserPhoto";
import "./Profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <div className="ProfileHeader">
          <UserPhoto />
          <div className="ProfileInfo">
            <h2>Eyvaz Ahmadzada</h2>
            <span>@eyvazahmadzada</span>
          </div>
        </div>
        <div className="ProfileItems">
          <ProfileItem icon="play" color="#66D58D" to="/">
            Play Quiz
          </ProfileItem>
          <ProfileItem icon="trophy" color="#4BB8DC" to="/scoreboard">
            Leaderboard
          </ProfileItem>
          <ProfileItem icon="bell" color="#F05975" to="/">
            Notifications
          </ProfileItem>
          <ProfileItem icon="cog" color="#BF79F0" to="/profile">
            Edit Profile
          </ProfileItem>
          <ProfileItem icon="circle-o" color="#ECC464" to="/">
            Earn Coins
          </ProfileItem>
        </div>
      </div>
    );
  }
}

export default Profile;
