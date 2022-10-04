//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let seg, seg1, min, min1, hour, hour1;
seg = seg1 = min = min1 = hour = hour1 = 0;
let countInterval;
countInterval = setInterval(() => {
            if (seg == 9) {
                seg = -1;
                seg1++;
            }
            if (seg1 == 6) {
                seg1 = 0;
                min++;
            }
            if (min == 9) {
                min = 0;
                min1++;
            }
            if (min1 == 6) {
                min1 = 0;
                hour++;
            }
            if (hour == 9) {
                hour = 0;
                hour1++;
            }
            if (hour == 2 && hour1 == 4) {
                seg = -1;
                seg1 = 0;
                min = 0;
                min1 = 0;
                hour = 0;
                hour1 = 0;
            }
            seg++;
            ReactDOM.render( < Home secondsOne = {
                    seg
                }
                secondsTwo = {
                    seg1
                }
                minutesOne = {
                    min
                }
                minutesTwo = {
                    min1
                }
                hoursOne = {
                    hour
                }
                hoursTwo = {
                    hour1
                }
                />, document.querySelector("#app"));
            }, 1000)