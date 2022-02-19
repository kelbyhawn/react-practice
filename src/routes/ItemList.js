import React from "react";
import Button from "../ui-kit/Button";

// returns a list of items added from the ItemForm component
// use props to call corresponding state value in parent component
export default function ItemList(props) {

  const { items, onCompleteClick, onDeleteClick } = props;

  return (
    <ul>
      {/* set props on items state and create array from items added in ItemForm */}
      {items.map((item, index) => (
        <li key={item.id}> {/* call object key "id" from setItems array in ShoppingList */}
          <div>
            <Button
              className={item.isComplete ? "item complete" : "item"}
              onClick={() => onCompleteClick(index)}
            >
              {item.item}
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