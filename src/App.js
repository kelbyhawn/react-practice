import React from "react";
import { ThemeProvider } from "./ThemeContext";
import ThemeButton from "./ThemeButton";
import ShoppingList from "./routes/ShoppingList";
import CatPics from "./routes/CatPics";
import FavColor from "./routes/FavColor";
import Rain from "./routes/Rain";
import Map from "./routes/Map";

function App() {
  return (
    <>
      <ThemeButton />
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