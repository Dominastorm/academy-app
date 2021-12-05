import classes from "./Card.module.css";

const HomeCard = (props) => {
    return (
        <div className={classes.homeCard}>
            <img className = {classes.thumb} src={props.thumb} alt="thumb" />
            <h2 className={classes.heading}>{props.heading}</h2>
            <h3 className={classes.subheading}>{props.subheading}</h3>
        </div>
    );
};

export default HomeCard;