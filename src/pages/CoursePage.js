import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Grid from "../components/Grid";

import cs201 from '../assets/cs201.jpg';
import cs202 from '../assets/cs202.png';
import cs203 from '../assets/cs203.png';
import cs204 from '../assets/cs204.jpeg';
import cs205 from '../assets/cs205.jpg';



const CoursePage = (props) => {
    return (
        <div>
            <Navbar />
            <Grid header="Courses">
                <Card thumb={cs201} heading="Digital Design and Computer Organization" subheading="CS201" />
                <Card thumb={cs202} heading="Data Structures and Applications" subheading="CS202" />
                <Card thumb={cs203} heading="Statistics for Data Science" subheading="CS203" />
                <Card thumb={cs204} heading="Web Techonologies" subheading="CS204" />
                <Card thumb={cs205} heading="Automata Formal Language and Logic" subheading="CS205" />
            </Grid>
        </div>
    )
}

export default CoursePage;