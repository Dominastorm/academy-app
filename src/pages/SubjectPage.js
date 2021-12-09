import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Grid from "../components/Grid";

import { subData } from "../components/data";

const SubjectPage = (props) => {
  console.log(window.location.pathname);
  const [data] = subData.filter(obj => '/coursepage/'+obj.path === window.location.pathname);
  const currPath = window.location.pathname.toString();
  console.log(data);
  return (
    <div>
      <Navbar />
        <Grid header={data.heading}>
          {data.units.map((ele) => (
            <Card
              thumb={require(`../assets/${data.thumb}`)}
              heading={ele}
              subheading={"Unit " + (data.units.indexOf(ele) + 1)}
              path={`${currPath}/unit${data.units.indexOf(ele) + 1}`}
            />
          ))}
        </Grid>
      ))
    </div>
  );
};

export default SubjectPage;
