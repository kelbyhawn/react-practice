import React from 'react';

export default function ItemForm(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <label htmlFor='item-name'>Enter an item:</label>
      <input
        id='item-name'
        type='text'
        value={props.entry}
        onChange={props.onEntryChange}
      />
      <button>Add Item</button>
    </form>
  );
};
