import React from "react";
import ReactDOM from "react-dom/client";
import Route from "./Route";
//import { StrictMode } from "react";
// ReactDOM pour s'attacher à notre HTML.
const root = ReactDOM.createRoot(document.getElementById("root"));
//dans la variable root on affiche tout mon application on importe
// le composant parent App.js
root.render(
  <React.StrictMode>
 <Route />
  </React.StrictMode>
   
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

