import React from "react";

//create your first component
const SecondCounter = (props) => {
	return (
		<div className="d-flex justify-content-center bg-dark text-whites p-5" style={{color: "white", fontSize: "50px"}}>
            <span id="counterClock"><i className="far fa-clock"/></span>
            &nbsp;&nbsp;
            <span id="counterHours1">{props.hoursTwo}</span>
            <span id="counterHours">{props.hoursOne}</span>
            <span>:</span>
            <span id="counterMinutes1">{props.minutesTwo}</span>
            <span id="counterMinutes">{props.minutesOne}</span>
            <span>:</span>
            <span id="counterSeconds1">{props.secondsTwo}</span>
            <span id="counterSeconds">{props.secondsOne}</span>
		</div>
	);
};

export default SecondCounter;
