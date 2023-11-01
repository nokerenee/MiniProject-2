// sets up a React application

// imports the required dependencies
import React from "react";
import ReactDOM from "react-dom/client"; 
import "./index.css";
import App from "./App"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // creates root for rendering and retrieves an HTML element where React app will be mounted
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
  // developer tool that highlights potential problems in the application during development
);