import Textfield from "../components/Textfield";
import classes from "./Loginpage.module.css";

const Loginpage = (props) => {
  return (
    <div className={classes.content}>
      <h1>Good to see you again</h1>
      <div className={classes.card}>
        
        <div className={classes.text}>
          <span>Your email</span>
          
          <Textfield
           
            icon="person"
            custom={{ type: "email", placeholder: "elon@email.com" }}
          />
        </div>
        <div className={classes.text}>
          <span>Your password</span>
          <Textfield
            
            icon="lock_open"
            custom={{ type: "password", placeholder: "elon123" }}
          />
        </div>
        <button className={classes.signIn}>Sign in</button>
      </div>
    </div>
  );
};
export default Loginpage;
