import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

export const innerStrip = document.querySelector(".innerstrip");

// innerStrip.classList.add("loading")
// setTimeout(() => {
//   innerStrip.classList.remove("loading")
//   innerStrip.classList.add("complete");
// }, 3000)