import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import NavBar from "../NavBar";
import Button from "react-bootstrap/Button";

function UserAccessContainer({ user }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div>
      <NavBar />
      {showLogin ? "loginform" : "signupform"}
      {showLogin ? <LoginForm /> : <SignupForm />}
      <button
        onClick={() => {
          setShowLogin(!showLogin);
        }}
      >
        {showLogin
          ? "not logged in? sign up here"
          : "have an account? log in here"}
      </button>
    </div>
  );
}

export default UserAccessContainer;
