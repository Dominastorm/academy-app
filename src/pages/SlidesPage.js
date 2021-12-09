import React from "react";
import slides from "../assets/ddcoslides.pdf";
import classes from "./NotesPage.module.css";

const SlidesPage = (props) => {
  return (
    <div className={classes.doc}> 
      <iframe src={slides} height="1000" width="1000"/>
    </div>
  );
};

export default SlidesPage;
