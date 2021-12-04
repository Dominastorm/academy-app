import classes from "./Navbar.module.css";
import logo from "../peslogo.png";
const Navbar = (props) => {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <img src={logo} alt="sorry" width="60px" height="60px" />
        <ul>
          <li>PES</li>
          <li>UNIVERSITY</li>
        </ul>
      </div>
      <div className={classes.menuBar}>
        <span class="material-icons" style={{ color: "white",fontSize:"35px" }}>
          clear_all
        </span>
        <h2>Menu</h2>
      </div>
    </div>
  );
};
export default Navbar;
