import classes from "./Navbar.module.css";
import logo from "../peslogo.png";
const Navbar = (props) => {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <img className={classes.logoImg} src={logo} alt="pes-logo" width="60px" height="60px" />
        <ul>
          <li>PES</li>
          <li>UNIVERSITY</li>
        </ul>
      </div>
      <div className={classes.menuBar}>
        <span className="material-icons" style={{ color: "white",fontSize:"35px" }}>
          clear_all
        </span>
        <h2>Menu</h2>
      </div>
    </div>
  );
};
export default Navbar;
