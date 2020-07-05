/* eslint-disable no-unused-vars */
import React from 'react';

function TodoList (props) {
  return (
    <ul>
      {props.list.map((item,i) => (
        <li
          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
          <span onClick={() => props.handleComplete(item._id)}>
            {item.text}
          </span>
          <button onClick={() => props.handleDelete(item._id)}>Delete </button>
          <button onClick={() => props.handleUpdate(i)}>Update </button>
          <input type="text" name={i}  placeholder={'Update text '+item.text} />
   
          {/* <button onClick={handleDelete}>Delete item</button> */}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
