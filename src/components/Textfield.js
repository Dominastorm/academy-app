import classes from "./Textfield.module.css";

const Textfield = props => {
  return (
    <div className={classes.textfield}>
      <i className="material-icons" style={{ color: "#434545", fontSize: "25px" }}>
        {props.icon}
      </i>
      <input {...(props.custom)}></input>
    </div>
  );
};
export default Textfield;