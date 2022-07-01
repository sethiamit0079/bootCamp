//////////////////////////// index.js ////////////////////////////

import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//////////////////////////Components ////////////////////////////////

///////////////////////////////List.jsx ////////////////////////////

import React from "react";

function List() {
  return (
    <div>
      <ul>
        <li>Bacon</li>
        <li>Jamon</li>
        <li>Noodles</li>
      </ul>
    </div>
  );
}

export default List;

/////////////////////////////////////// Heading.jsx //////////////////////////////

import React from "react";

function Heading() {
  return <h1>My Favourite Foods</h1>;
}

export default Heading;



//////////////////////////////////////// App.jsx ////////////////////////////////

import React from "react";
import Heading from "./Components/Heading";
import List from "./Components/List";

function App() {
  return (
    <div>
      <Heading />
      <List />
    </div>
  );
}

export default App;


///////////////////////////////////////////////////////////////////////////

