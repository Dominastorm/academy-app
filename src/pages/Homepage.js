import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import classes from "./Homepage.module.css";
import Grid from "../components/Grid";

import homeData from "../components/data";
// import "../components/data";

const Homepage = (props) => {
  return (
    <div>
      <Navbar />
      <Grid header="Home">
        {homeData.map((obj) => (
          <Card
            thumb={require(`../assets/${obj.thumb}`).default}
            heading={obj.heading}
          />
        ))}
      </Grid>
    </div>
  );
};
export default Homepage;
