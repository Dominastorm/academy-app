import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

const CalendarCard = () => {
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };
  return (
    <div>
      <Calendar value={dateState} onChange={changeDate} />
      <p>Current selection is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
    </div>
  );
};

export default CalendarCard;