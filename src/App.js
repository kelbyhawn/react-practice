import React from 'react';
import './App.sass';
import Map from './Map';
import ShoppingList from './ShoppingList';
import CatPics from './CatPics';
import UploadCatPic from './UploadCatPic';

function App() {
  return (
    <main>
      <ShoppingList />
      <hr />
      <CatPics />
      <hr />
      <Map />
      {/* 
      <UploadCatPic />
      */}
    </main>
  );
}

export default App;
