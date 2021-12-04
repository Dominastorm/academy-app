import classes from "./HomeCard.module.css";
import thumb from "../ddco.jpg";

const HomeCard = (props) => {
    return (
        <div className={classes.homeCard}>
            <img className = {classes.thumb} src={thumb} alt="thumb" />
            <h3>PES</h3>
        </div>
    );
};

export default HomeCard;