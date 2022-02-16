import React from "react";
import Button from "../ui-kit/Button";

// returns a list of items added from the ItemForm component
// use props to call corresponding state value in parent component
export default function ItemList(props) {

  const { items, onCheckedClick, onDeleteClick } = props;

  return (
    <ul>
      {/* set props on items state and create array from items added in ItemForm */}
      {items.map((item, index) => (
        <li key={item + index}> {/* call object key "id" from setItems array in ShoppingList */}
          <div>
            <Button
              className={item.isChecked ? "item checked" : "item"}
              onClick={() => onCheckedClick(index)}>
              <span>{item.isChecked ? "☑" : "☐"}</span> {item.item}
            </Button>
            <Button
              className="btn-delete"
              onClick={() => onDeleteClick(item.id)} 
              children="×"
            />
          </div>
        </li>
      ))}
    </ul>
  ); 
}