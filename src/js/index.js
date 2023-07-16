//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// include your styles into the webpack bundle
import "../styles/index.css";
//import your own components
import Home from "./component/home.jsx";
import { Counter } from "./component/Counter.jsx";
//render your react application
let counter = 0

setInterval(() => { ReactDOM.render(<Counter seconds={counter} />, document.querySelector("#app")); counter++; }, 1000)