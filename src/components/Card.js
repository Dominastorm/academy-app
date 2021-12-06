import classes from "./Card.module.css";
import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to={`/${props.path}`} style={{textDecoration: 'none', color: 'inherit'}}>
      <div className={classes.Card} onClick={props.onPress}>
        <img className={classes.thumb} src={props.thumb} alt="thumb" />
        <h2 className={classes.heading}>{props.heading}</h2>
        <h3 className={classes.subheading}>{props.subheading}</h3>
      </div>
    </Link>
  );
};

export default Card;
