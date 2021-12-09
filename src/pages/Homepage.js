import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import classes from "./Homepage.module.css";
import Grid from "../components/Grid";
import homeData from "../components/data";

const Homepage = (props) => {
  return (
    <div>
      <Navbar />
      <Grid header="Home">
        {homeData.map((obj) => (
          <Card
            // key={obj.thumb}
            thumb={require(`../assets/${obj.thumb}`)}
            heading={obj.heading}
            path={obj.path}
          />
        ))}
      </Grid>
    </div>
  );
};
export default Homepage;
