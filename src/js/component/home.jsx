import React from "react";
import SecondCounter from "./counter.jsx";

//create your first component
const Home = (props) => {
	return (
		<SecondCounter secondsOne={props.secondsOne} secondsTwo={props.secondsTwo} minutesOne={props.minutesOne} minutesTwo={props.minutesTwo} hoursOne={props.hoursOne} hoursTwo={props.hoursTwo}  />
	);
};

export default Home;