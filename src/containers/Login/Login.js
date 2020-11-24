import React, { Component } from "react";
import { Link } from "react-router-dom";
import FormButton from "../../components/UI/FormButton/FormButton";
import FormGroup from "../../components/UI/FormGroup/FormGroup";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <h2 className="LoginHeader">Sign In</h2>
        <form>
          <FormGroup type="email" name="email" label="Email Address" />
          <FormGroup type="password" name="password" label="Create Password" />
          <p className="ForgotPassword">
            <Link to="forgot">Forgot your password?</Link>
          </p>
          <FormButton>Sign in</FormButton>
        </form>
      </div>
    );
  }
}

export default Login;
