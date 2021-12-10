import React from "react";
import classes from "./Grid.module.css";
import user from "../pages/Loginpage";
import { Link } from "react-router-dom";

const logOut = (props) => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
}
const username = localStorage.getItem("username")

const Grid = (props) => (
  <div className={classes.grid}>
    <h3>{username}</h3>
    <Link
      to={`/loginpage`}>
      
      <div className={classes.button} onClick={props.onPress, logOut}>
        <h4>Log Out</h4>
      </div>
    </Link>
    <h4>{props.user}</h4>
    <h1>{props.header}</h1>
    <div className={classes.row}>{props.children}</div>
  </div>
);

export default Grid;
