import React from "react";
import classes from "./Logo.module.css";
import logo from "../assets/peslogo.png";

const Logo = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img
          className={classes.logoImg}
          src={logo}
          alt="pes-logo"
          width="60px"
          height="60px"
        />
        <ul>
          <li>PES</li>
          <li>UNIVERSITY</li>
        </ul>
      </div>
    </div>
  );
};

export default Logo;
