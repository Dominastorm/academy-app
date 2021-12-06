import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Grid from "../components/Grid";

import { subData } from "../components/data";

const CoursePage = (props) => {
  return (
    <div>
      <Navbar />
      <Grid header="Courses">
        {subData.map((obj) => (
          <Card
            thumb={require(`../assets/${obj.thumb}`)}
            heading={obj.heading}
            subheading={obj.subheading}
            path={obj.path}
          />
        ))}
      </Grid>
    </div>
  );
};

export default CoursePage;
