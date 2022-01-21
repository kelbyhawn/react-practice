import React from "react";
import Button from "../ui-kit/Button";
import Input from "../ui-kit/Input";

export default function ItemForm(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <Input 
        label={"Enter an item:"}
        value={props.entry} // uses entry state from App
        onChange={props.onEntryChange} // uses setEntry state from App
        autoFocus={(window.screen.width <= 480) ? false : true }
      />
      <p className="tiny required">{props.validation}</p>
      
      <Button children={"Add Item"} />
    </form>
  );
};
