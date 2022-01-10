import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import Layout from "./Layout";
import ShoppingList from "./routes/ShoppingList";
import CatPics from "./routes/CatPics";
import FetchExamples from "./routes/FetchExamples";
import Map from "./routes/Map";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ShoppingList />} />
          <Route path="cats" element={<CatPics />} />
          <Route path="fetch-examples" element={<FetchExamples />} />
          <Route path="map" element={<Map />} />
        </Route>
      </Routes>
    </>
  );
}

// an App Wrapper allows for the App component to be used in the ThemeProvider
// - this prevents bugs when Context needs to be called in the App component (it's not currenty being used, but just in case)
function AppWrapper() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}

export default AppWrapper;