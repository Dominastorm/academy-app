import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import classes from "./CalendarCard.module.css"
import timetable from "../assets/timetable.jpg"

const CalendarCard = () => {
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };
  return (
    <div className={classes.calendar}>
      <Calendar value={dateState} onChange={changeDate} />
      <p>Current selection is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
      <img src={timetable} alt="timetable" />
    </div>
  );
};

export default CalendarCard;