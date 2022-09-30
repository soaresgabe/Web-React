import React from "react";
import ReactDOM from "react-dom";

const name = "Gabe";
const surname = "Soares";
let luckyn = Math.ceil(10 * Math.random());

ReactDOM.render(
  <div>
    <h1>Hello {name + " " + surname}</h1>
    <p>Your lucky number is {luckyn}</p>
  </div>,
  document.getElementById("root")
);
