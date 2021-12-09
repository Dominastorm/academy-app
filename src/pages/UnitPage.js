import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Grid from "../components/Grid";

import { subData, unitData } from "../components/data";

const UnitPage = (props) => {
  return (
    <div>
      <Navbar />
      <Grid header={"Unit "+window.location.pathname.slice(-1)}>
        {unitData.map((ele) => (
          <Card
            thumb={require(`../assets/${ele.thumb}`)}
            heading={ele.heading}
            path={ele.path}
          />
        ))}
      </Grid>
      ))
    </div>
  );
};

export default UnitPage;
