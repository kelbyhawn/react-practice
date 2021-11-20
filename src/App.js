import React from 'react';
import './App.sass';
import Map from './Map';
import ShoppingList from './ShoppingList';
import CatPics from './CatPics';

function App() {
  return (
    <main>
      <ShoppingList />
      <hr />
      <CatPics />
      {/* 
      <hr />
      <Map /> 
      */}
    </main>
  );
}

export default App;
