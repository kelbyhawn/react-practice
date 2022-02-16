import React, { useState, useEffect } from "react";
import ItemForm from "./ItemForm.js";
import ItemList from "./ItemList.js";

export default function ShoppingList() {
  const [newItem, setNewItem] = useState(""); // start w/ empty input
  const [validation, setValidation] = useState(""); // start w/ empty p
  // Lazy initial state; return the value from localStorage w/ .getItem() method
  const [items, setItems] = useState(() => {
    const listItems = localStorage.getItem("items");
    if (listItems) {
      // parse items array when retrieving
      return JSON.parse(listItems);
    }
    return []; // start w/ empty array
  }); 


  // update the title w/ the useEffect hook each time an item is added to the list
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
    if (!newItem) {
      setValidation("Please enter an item");
      return;
    }

    // add each entry object to the new items array created in ItemList component
    setItems([
      ...items,
      {
        id: items.length + 1,
        item: newItem, // set newItem props from newItem state
        isChecked: false,
      }
    ]);

    // clear entry form in ItemForm component
    setNewItem("");
    setValidation("");
  }

  // set new item name
  function handleItemChange(e) {
    // save each item added in the ItemForm component
    setNewItem(e.target.value);
  }

  // check off an item
  function handleCheckedClick(index) {
    let itemsList = [...items];
    itemsList[index].isChecked = !itemsList[index].isChecked;
    setItems([...itemsList]);
  }

  // delete an item
  function handleDeleteClick(id) {
    // delete the entry that matches item.id
    setItems(items.filter(item => item.id !== id));
  }

  return (
    <div className="wrapper">
      <h1>Simple Shopping List</h1>
      <ItemForm
        newItem={newItem}
        validation={validation}
        onItemChange={handleItemChange}
        onFormSubmit={handleFormSubmit}
      />
      <ItemList
        items={items}
        onCheckedClick={handleCheckedClick}
        onDeleteClick={handleDeleteClick} 
      />
    </div>
  );
}

