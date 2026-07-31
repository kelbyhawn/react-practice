import React from "react";
import Button from "../ui-kit/Button";
import Input from "../ui-kit/Input";

export default function ItemForm({
  newItem,
  onItemChange,
  validation,
  onFormSubmit,
}) {
  return (
    <form onSubmit={onFormSubmit}>
      <Input
        label="Enter an item:"
        value={newItem} // uses entry state from App
        onChange={onItemChange} // uses setEntry state from App
        autoFocus={
          typeof window !== "undefined" && window.screen.width <= 480
            ? false
            : true
        }
      />
      <Button>Add Item</Button>

      <p className="tiny required">{validation}</p>
    </form>
  );
}
