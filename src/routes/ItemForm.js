import React from "react";
import Button from "../ui-kit/Button";
import Input from "../ui-kit/Input";

export default function ItemForm(props) {

  const { newItem, onItemChange, validation, onFormSubmit } = props;

  return (
    <form onSubmit={onFormSubmit}>
      <Input 
        label="Enter an item:"
        value={newItem} // uses entry state from App
        onChange={onItemChange} // uses setEntry state from App
        autoFocus={(window.screen.width <= 480) ? false : true }
      />
      <Button children={"Add Item"} />
      
      <p className="tiny required">{validation}</p>
    </form>
  );
};
