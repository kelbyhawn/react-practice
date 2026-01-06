import React from "react";
import { createRoot } from "react-dom/client";
import AppWrapper from "./App";
import "./App.sass";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
