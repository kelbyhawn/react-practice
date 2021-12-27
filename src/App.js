import React from "react";
import "./App.sass";
import Map from "./Map";
import ShoppingList from "./ShoppingList";
import CatPics from "./CatPics";
//import UploadCatPic from "./UploadCatPic";
import FavColor from "./FavColor";
import Rain from "./Rain";

function App() {
  return (
    <main>
      <ShoppingList />
      <hr />
      <CatPics />
      <hr />
      <FavColor />
      <Rain />
      <hr />
      <Map />
      {/* 
      <UploadCatPic />
      */}
    </main>
  );
}

export default App;
