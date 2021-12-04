import Textfield from "../components/Textfield";
import classes from "./Loginpage.module.css";

const Loginpage = (props) => {
  return (
    <div className={classes.content}>
      <h1>Good to see you again</h1>
      <div className={classes.card}>
          <span>Your email</span>
          <Textfield/>
          <span>Your password</span>
          <Textfield/>
          <button>Sign in</button>
      </div>
    </div>
  );
};
export default Loginpage;
