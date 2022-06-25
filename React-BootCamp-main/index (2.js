import React from "react";
import ReactDOM from "react-dom";

const fname = "Sethi";
const lname = "amit";
const no = 8;

//We can add any JS expression (value) in b/w this { } curly braces.
//but can't write js statements like if else
ReactDOM.render(
  <div>
    <h1>
      Hello {fname} full name {fname + " " + lname}
    </h1>
    <p>Lucky number is {no}</p>
    <p> No div by {4 / 2} </p>
    <p> Random no {Math.floor(Math.random() * 10)} </p>
  </div>,

  document.getElementById("root")
);
