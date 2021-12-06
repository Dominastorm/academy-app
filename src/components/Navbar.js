import React from "react";
import classes from "./Navbar.module.css";
import logo from "../assets/peslogo.png";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const Navbar = (props) => {
  return (
    <Link to={`/homepage`} style={{textDecoration: 'none', color: 'inherit'}}>
      <div className={classes.navbar}>
      <Logo />
         <div className={classes.menuBar}>
          <span className="material-icons" style={{ color: "white",fontSize:"35px" }}>
            clear_all
          </span>
          <h2>Menu</h2>
        </div>
      </div>
    </Link>
  );
};
export default Navbar;