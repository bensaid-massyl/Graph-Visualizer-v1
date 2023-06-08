import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./_App";
import Visualizer from "./Visualizer";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Visualizer />
  </React.StrictMode>
);
