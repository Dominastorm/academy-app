import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Grid from "../components/Grid";

import { subData } from "../components/data";

const UnitPage = (props) => {
  console.log(window.location.pathname);
  const [data] = subData.filter(obj => '/coursepage/'+obj.path === window.location.pathname);
  return (
    <div>
      <Navbar />
        <Grid header={data.heading}>
          {data.units.map((ele) => (
            <Card
              thumb={require(`../assets/${data.thumb}`)}
              heading={ele}
              subheading={"Unit " + (data.units.indexOf(ele) + 1)}
              path={data.path}
            />
          ))}
        </Grid>
      ))
    </div>
  );
};

export default UnitPage;

