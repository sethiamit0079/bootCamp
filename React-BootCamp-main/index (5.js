//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.


/////////////////////////////////////////////// Solved by me ///////////////////////////////////

import React from "react";
import ReactDOM from "react-dom";

var day = new Date(2020, 1, 1, 22).getHours();

const customStyle = { color: "red" };

if (day >= 1 && day <= 12) {
  ReactDOM.render(
    <h1 className="heading" style={{ color: "red" }}>
      Goodmorning {day}
    </h1>,
    document.getElementById("root")
  );
}

if (day > 12 && day <= 18) {
  ReactDOM.render(
    <h1 className="heading" style={{ color: "green" }}>
      GoodAfternoon {day}
    </h1>,
    document.getElementById("root")
  );
}

if (day > 18 && day <= 24) {
  ReactDOM.render(
    <h1 className="heading" style={{ color: "blue" }}>
      GoodNight {day}
    </h1>,
    document.getElementById("root")
  );
}



////////////////////////////////////////////////////////////////// Solution //////////////////////


import React from "react";
import ReactDOM from "react-dom";

var currTime = new Date(2020, 1, 1, 12).getHours();

let greeting;

const customStyle = {
  color: ""
};

if (currTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);