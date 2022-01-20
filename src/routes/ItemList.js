import React from "react";
import Button from "../ui-kit/Button";


// returns a list of items added from the ItemForm component
// use props to call corresponding state value in parent component
export default function ItemList(props) {
  return (
    <ul>
      {/* set props on items state and create array from items added in ItemForm */}
      {props.items.map((item) => (
        <li key={item.id}> {/* call object key "id" from setItems array in App */}
          <div>
            <input
              type="checkbox"
              id={item.entry} // call object key "entry" from setItems array in App
              name={item.entry} 
              value={item.entry}
            />
            <label htmlFor={item.entry}>{item.entry}</label> 
            
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