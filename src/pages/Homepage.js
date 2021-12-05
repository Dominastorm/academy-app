import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import classes from "./Homepage.module.css";
import Grid from "../components/Grid";

import courses from "../assets/courses.webp";
import timeTable from "../assets/timeTable.jpeg";
import attendance from '../assets/attendance.jpg';
import announcements from '../assets/announcements.jpeg';
import results from "../assets/results.jpeg";


const Homepage = (props) => {
  return (
    <div>
      <Navbar />
      <Grid header="Home">
        <Card thumb={courses} heading="Courses"/>
        <Card thumb={timeTable} heading="Time Table"/>
        <Card thumb={attendance} heading="Attendance"/>
        <Card thumb={announcements} heading="Announcements"/>
        <Card thumb={results} heading="Results"/>
        {/* <Card thumb={ddco} heading="Digital Design and Computer Organization" subheading="CS201"/> */}
      </Grid>
    </div>
  );
};
export default Homepage;