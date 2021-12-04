import React from "react";
import Navbar from "../components/Navbar";
import HomeCard from "../components/HomeCard";
import classes from "./Homepage.module.css";
const Homepage = (props) => {
  return (
    <div>
      <Navbar />
      <HomeCard />
    </div>
  );
};

export default Homepage;