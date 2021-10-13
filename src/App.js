import React from 'react';
import './App.sass';
import ItemForm from './ItemForm.js';
import ItemList from './ItemList.js'
import Map from './Map.js';

function App() {
  const [items, setItems] = React.useState([]); // start w/ empty array
  const [entry, setEntry] = React.useState(''); // start w/ empty input
  const [validation, setValidation] = React.useState(''); // start w/ empty p

  // udpdate the title w/ the useEffect hook each time an item is added to the list
  // always put useEffect hook at the top of the component to avoid errors
  // never call hooks in loops, conditions, or nested functions
  React.useEffect(() => {
    if (items.length === 0) {
      document.title = 'Add an item';
    } else {
      document.title = `${items.length} items in list`;
    }
  })

  function handleFormSubmit(e) {
    e.preventDefault();

    // if entry input is empty show validation message
    if (!entry) {
      setValidation("Please enter an item");
      return;
    }

    // add each entry object to the new items array created in ItemList component
    setItems([
      ...items,
      {
        id: items.length + 1, // set an id (this will change with APIs)
        entry: entry, // set entry props from entry state
      },
    ]);

    // clear entry form in ItemForm component
    setEntry("");
    setValidation("");
  }

  function handleEntryChange(e) {
    // save each entry added in the ItemForm component
    setEntry(e.target.value);
  }

  function handleDeleteClick(id) {
    // delete the entry that matches item.id
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <main>
      <h1>Simple Shopping List</h1>
      <ItemForm
        entry={entry}
        validation={validation}
        onEntryChange={handleEntryChange}
        onFormSubmit={handleFormSubmit}
      />
      <ItemList items={items} onDeleteClick={handleDeleteClick} />
      <Map />
    </main>
  );
}

export default App;
