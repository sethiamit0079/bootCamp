///////////////////////////////////////////////////// index.js  ////////////////////////////////////////
// var React = require("react");
// var ReactDOM = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";

//ReactDOM.render(<h1>Hello world</h1>, document.getElementById("root"));
//ReactDOM.render(WHAT TO SHOW , WHERE TO SHOW IT);

//or

// var h1 = document.createElement("h1");
// h1.innerHTML = "HELLO WORLD";
// document.getElementById("root").appendChild(h1);

ReactDOM.render(
  <div>
    <h1>Hello world</h1>
    <p> This is paragraph </p>
  </div>,
  document.getElementById("root")
);



////////////////////////////////////////////////////////// index.html ////////////////////////////////////////////////////

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JSX</title>
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <div id="root"></div>
    <script src="../src/index.js" type="text/javascript"></script>
  </body>
</html>
