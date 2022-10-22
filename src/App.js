import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Main from "./main/Main";
import UserAccessContainer from "./components/UserAccess/UserAccessContainer";

// login, signup

function App() {
  //user state, null on load
  const [user, setUser] = useState(null); // logged in (true) : logged out (null)

  //check for user on component load
  useEffect(() => {
    //      autoLogin();
    if (user == true) {
      console.log("user exists, loggedin");
    } else {
      console.log("user dne, showing UserAccessContainer");
    }
  }, []);

  //auto login function
  const autoLogin = () => {
    //fetch
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
        });
      }
    });
  };
  if (!user) return <UserAccessContainer user={user} />;

  // show dashboard if logged in
  return <Main user={user} />;
}

export default App;
