import React from "react";
import HomeCard from "./Card";
import classes from "./Grid.module.css";

const Grid = (props) => (
    <div className={classes.grid}>
        <h1>{props.header}</h1>
        <div className={classes.row}>{props.children}</div>
    </div>
);

export default Grid;