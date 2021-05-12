import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import { App } from "./App";
import "./index.css";

ReactDOM.render(
      <App />,
=======
import App from "./App";
import { DataProvider } from "./context/DataProvider";
import "./index.css";

ReactDOM.render(
  <DataProvider>
    <App />
  </DataProvider>,
>>>>>>> main
  document.getElementById("root")
);
