import classes from "./Textfield.module.css";
import React from "react";

const Textfield = props => {
  return (
    <div className={classes.textfield}>
      <i className="material-icons" style={{ color: "#434545", fontSize: "25px" }}>
        {props.icon}
      </i>
      <input {...(props.custom)} onChange={props.onChange}></input>
    </div>
  );
};
export default Textfield;