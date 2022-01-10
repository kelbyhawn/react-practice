import React from "react";

export default function ItemForm(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      {/* uses setItems state from App */}
      <label htmlFor="item-name">Enter an item:</label>
      <input
        id="item-name"
        type="text"
        ref={props.inputRef} // uses useRef() to focus on page load
        value={props.entry} // uses entry state from App
        onChange={props.onEntryChange} // uses setEntry state from App
      />
      <button>Add Item</button>
      <p className="error-msg">{props.validation}</p>
    </form>
  );
};
