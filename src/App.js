import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Main from "./main/Main";
import UserAccessContainer from "./components/UserAccess/UserAccessContainer";
import { Button } from "reactstrap";
// login, signup

function App() {
  //user state, null on load
  const [user, setUser] = useState(false); // logged in (true) : logged out (null)

  //check for user on component load
  useEffect(() => {
    //      autoLogin();
    if (user !== null) {
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
  // if (!user) return <UserAccessContainer user={user} />;

  const toggleUser = () => {
    setUser(!user);
  };

  // show dashboard if logged in
  return (
    <>
      <Main user={user} toggleUser={toggleUser} />
      <Button onClick={toggleUser}>{user ? "sign out" : "sign in"}</Button>
    </>
  );
}

export default App;
