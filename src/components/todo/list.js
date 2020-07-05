import React from 'react';

class TodoList extends React.Component {

  render() {
    return (
      <ul>
        {this.props.list.map((item,i) => (
          <li
            className={`complete-${item.complete.toString()}`}
            key={item._id}
          >
            <span onClick={() => this.props.handleComplete(item._id)}>
             {item.text}
            </span>
            <button onClick={() => this.props.handleDelete(item._id)}>Delete </button>
            <button onClick={() => this.props.handleUpdate(i)}>Update </button>
            <input type="text" name={i}  placeholder={'Update text '+item.text} />
   
            {/* <button onClick={handleDelete}>Delete item</button> */}
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
