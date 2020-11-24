import React, { Component } from "react";
import FormButton from "../../components/UI/FormButton/FormButton";
import FormGroup from "../../components/UI/FormGroup/FormGroup";
import UserPhoto from "../../components/UI/UserPhoto/UserPhoto";
import "./Register.css";

class Register extends Component {
  uploadPhoto() {
    document.querySelector("#photo").click();
  }

  render() {
    return (
      <div className="Register">
        <h2 className="RegisterHeader">Sign Up</h2>
        <form>
          <div className="RegisterPhoto">
            <UserPhoto clicked={this.uploadPhoto} />
          </div>
          <input type="file" id="photo" />
          <FormGroup type="text" name="username" label="Username" />
          <FormGroup type="email" name="email" label="Email Address" />
          <FormGroup type="password" name="password" label="Create Password" />
          <FormButton>Register now</FormButton>
        </form>
      </div>
    );
  }
}

export default Register;
