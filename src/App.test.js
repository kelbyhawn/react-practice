import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

// Resolves mapbox-gl issue
jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  Map: () => ({})
}));