import React from "react";
import ReactDOM from "react-dom";
import CounterApp from "./CounterApp";
import FirstApp from "./FirstApp";
import "./index.css";

const divRoot = document.getElementById("root");
ReactDOM.render(<CounterApp value={5} />, divRoot);
