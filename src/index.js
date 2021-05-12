import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DataProvider } from "./context/DataProvider";
import { AuthContext } from "./context/AuthContext";
import "./index.css";

ReactDOM.render(
<AuthContext>
  <DataProvider>
    <App />
  </DataProvider>
  </AuthContext>,
  document.getElementById("root")
);
