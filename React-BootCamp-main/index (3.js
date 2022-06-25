///////////////////////// indes.js //////////////////////

import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <img alt="random" src={img} />
    <img alt="dimension" src="https://picsum.photos/200/300" />
  </div>,
  document.getElementById("root")
);

//All HTML attributes used as Camelcase here if more then one word
//lorem picsum


///////////////////////////////// style.css ///////////////////////

.heading {
  color: red;
}

ul {
  color: blue;
}
