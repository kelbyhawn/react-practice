import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import Layout from "./Layout";
import ShoppingList from "./routes/ShoppingList";
import CatPics from "./routes/CatPics";
import FetchExamples from "./routes/FetchExamples";
import Map from "./routes/Map";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <>
      <Routes>
        {/* nest routes to render inside the Layout component */}
        <Route path="/" element={<Layout />}>
          {/* add "index" attribute to set the home page */}
          <Route index element={<ShoppingList />} />
          <Route path="cats" element={<CatPics />} />
          <Route path="fetch-examples" element={<FetchExamples />} />
          <Route path="map" element={<Map />} />
          {/* handle 404 not found */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

// an App Wrapper allows for the App component to be used in the ThemeProvider
// - this prevents bugs when Context needs to be called in the App component (it's not currently being used, but just in case)
function AppWrapper() {
  return (
    <HashRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HashRouter>  
  )
}

export default AppWrapper;