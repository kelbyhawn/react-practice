import React from 'react';
import './App.sass';
import Map from './Map';
import ShoppingList from './ShoppingList';
import CatPics from './CatPics';
//import UploadCatPic from './UploadCatPic';
import FavColor from "./FavColor";

function App() {
  return (
    <main>
      <ShoppingList />
      <hr />
      <CatPics />
      <hr />
      <FavColor />
      <hr />
      <Map />
      {/* 
      <UploadCatPic />
      */}
    </main>
  );
}

export default App;
