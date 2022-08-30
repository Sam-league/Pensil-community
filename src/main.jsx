import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Context } from "./Context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <App />
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);
