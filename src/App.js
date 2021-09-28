import React from 'react';
import './App.sass';
import ItemForm from './ItemForm.js';
import ItemList from './ItemList.js'

function App() {
  const [entry, setEntry] = React.useState(""); // start w/ empty input
  const [items, setItems] = React.useState([]); // start w/ empty array

  function handleFormSubmit(e) {
    e.preventDefault();

    // add each entry to the new items array created in ItemList component
    setItems([...items, entry]);

    // clear entry form in ItemForm component
    setEntry("");
  }

  function handleEntryChange(e) {
    // save each entry added in the ItemForm component
    setEntry(e.target.value);
  }

  function handleDeleteClick(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <main>
      <h1>Shopping List</h1>
      <ItemForm entry={entry} onEntryChange={handleEntryChange} onFormSubmit={handleFormSubmit} />
      <ItemList items={items} onDeleteClick={handleDeleteClick} />
    </main>
  );
}

export default App;
