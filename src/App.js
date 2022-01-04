import React from "react";
import { ThemeProvider } from "./ThemeContext";
import "./App.sass";
import ThemeButton from "./ThemeButton";
import ShoppingList from "./ShoppingList";
import CatPics from "./CatPics";
import FavColor from "./FavColor";
import Rain from "./Rain";
import Map from "./Map";

function App() {
  return (
    <>
      <ThemeButton />
      <main>
        <ShoppingList />
        <hr />
        <CatPics />
        <hr />
        <FavColor />
        <Rain />
        <hr />
        <Map />
      </main>
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