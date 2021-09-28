import React from 'react';

export default function ItemList(props) {
  return (
    <ul>
      {props.items.map((item, id) => (
        <li key={id}>
          <div>
            <input type='checkbox' id={item} name={item} value={item} />
            <label htmlFor={item}>{item}</label>
            {/* 
            <button
              className='btn-delete'
              onClick={() => props.onDeleteClick(item.id)}
            >
              &#215;
            </button>
            */}
          </div>
        </li>
      ))}
    </ul>
  ); 
}