import React, { useState, useEffect, useRef } from "react";
import ItemForm from "./ItemForm.js";
import ItemList from "./ItemList.js";

export default function ShoppingList() {
  // Lazy initial state; return the value from localStorage w/ .getItem() method
  const [items, setItems] = useState(() => {
    const listItems = localStorage.getItem("items");
    if (listItems) {
      // parse items array when retrieving
      return JSON.parse(listItems);
    }
    return [];
  }); // start w/ empty array
  const [entry, setEntry] = useState(""); // start w/ empty input
  const [validation, setValidation] = useState(""); // start w/ empty p
  const inputRef = useRef();

  // use refs to focus on input on page load
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // udpdate the title w/ the useEffect hook each time an item is added to the list
  // always put useEffect hook at the top of the component to avoid errors
  // never call hooks in loops, conditions, or nested functions
  useEffect(() => {
    if (items.length === 0) {
      document.title = "Add an item";
    } else {
      document.title = `${items.length} items in list`;
    }
  });

  // store items added in local storage
  useEffect(() => {
    // stringify the array of items to store it
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]); // update when items state changes

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
    <div className="wrapper">
      <h1>Simple Shopping List</h1>
      <ItemForm
        inputRef={inputRef}
        entry={entry}
        validation={validation}
        onEntryChange={handleEntryChange}
        onFormSubmit={handleFormSubmit}
      />
      <ItemList items={items} onDeleteClick={handleDeleteClick} />
    </div>
  );
}

