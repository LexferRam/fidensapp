import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { AuthProvider } from "./auth/AuthContext";
import { DataProvider } from "./context/DataProvider";
import "./index.css";

ReactDOM.render(
  <AuthProvider>
    <DataProvider>
      <App />
    </DataProvider>
  </AuthProvider>,
  document.getElementById("root")
);
