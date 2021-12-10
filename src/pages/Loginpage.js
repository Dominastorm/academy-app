import Textfield from "../components/Textfield";
import React, { useState } from "react";
import classes from "./Loginpage.module.css";
import Logo from "../components/Logo";
import { baseUrl } from "../components/data";
import { Link,Navigate } from "react-router-dom";



const Loginpage = (props) => {
  const loginCookie=localStorage.getItem('loggedIn');
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState("0");//0 is inital state 1 is incorrect password and 2 is succesfully logged in
  

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const signInHandler = async (event) => {
    event.preventDefault();


    try {
      const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();
      if (response.status !== 401) {
        setLoggedIn("2");
        localStorage.setItem("username", username);
        localStorage.setItem("loggedIn",true);
        
      } else {
        setLoggedIn("1");
        
      }
    } catch (e) {
      console.log(e);
    }
  };
  
  return (
    <div className={classes.content}>
      <Logo />
      {(loggedIn==="2" || loginCookie) && <Navigate to="/homepage"/>}
      <form className={classes.card}>
        <div className={classes.text}>
          <span>Your Username</span>

          <Textfield
            icon="person"
            custom={{ placeholder: "eg :  PES1UG19CS123 ..." }}
            onChange={usernameHandler}
          />
        </div>
        <div className={classes.text}>
          <span>Your Password</span>
          <Textfield
            icon="lock_open"
            custom={{ type: "password", placeholder: "eg : elon123" }}
            onChange={passwordHandler}
          />
        </div>
        {loggedIn==="1" && <p style={{color:"red"}}>Incorrect Username or password</p> }
        <button
          className={classes.signIn}
          onClick={signInHandler}
          type="submit"
        >
          Sign in
        </button>

      </form>
    </div>
  );
  
};
// console.log(user);
export default Loginpage;
// export {user};
