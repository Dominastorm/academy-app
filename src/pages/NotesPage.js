import React from "react";
import notes from "../assets/ddconotes.pdf";
import classes from "./NotesPage.module.css";

const NotesPage = (props) => {
  return (
    <div className={classes.doc}> 
      <iframe src={notes} height="1000" width="1000"/>
    </div>
  );
};

export default NotesPage;
