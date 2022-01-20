import React from "react";
import Button from "../ui-kit/Button";
import Checkbox from "../ui-kit/Checkbox";

// returns a list of items added from the ItemForm component
// use props to call corresponding state value in parent component
export default function ItemList(props) {
  return (
    <ul>
      {/* set props on items state and create array from items added in ItemForm */}
      {props.items.map((item) => (
        <li key={item.id}> {/* call object key "id" from setItems array in ShoppingList */}
          <div>
            <Checkbox 
              value={item.entry}
            />
            <Button
              className="btn-delete"
              onClick={() => props.onDeleteClick(item.id)} 
              children="×"
            />
          </div>
        </li>
      ))}
    </ul>
  ); 
}