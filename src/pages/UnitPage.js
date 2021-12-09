import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Grid from "../components/Grid";

import { subData } from "../components/data";

const SubjectPage = (props) => {
  console.log(window.location.pathname);
  const [data] = subData.filter(obj => '/'+obj.path === window.location.pathname);
  return (
    <div>
      <Navbar />
        <Grid header={data.heading}>
          {data.units.map((ele) => (
            <Card
              thumb={require(`../assets/${data.thumb}`)}
              heading={ele}
              subheading={"Unit " + (data.units.indexOf(ele) + 1)}
              path={data}
            />
          ))}
        </Grid>
      ))
    </div>
  );
};

export default UnitPage;

