import React from "react";
import { createRoot } from "react-dom/client";
import App from "../App";

test("renders without crashing", () => {
  const div = document.createElement("div");
  createRoot(div).render(<App />);
});

// Mapbox mock
jest.mock(
  "./routes/Map.js",
  () =>
    function MockMap() {
      return <></>;
    },
);
