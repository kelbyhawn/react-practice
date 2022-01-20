import React from "react";
import Button from "../ui-kit/Button";
import Input from "../ui-kit/Input";

export default function ItemForm(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <Input 
        children={"Enter an item:"}
        value={props.entry} // uses entry state from App
        onChange={props.onEntryChange} // uses setEntry state from App
        autoFocus
      />
      <Button children={"Add Item"} />
      <p className="error-msg">{props.validation}</p>
    </form>
  );
};
