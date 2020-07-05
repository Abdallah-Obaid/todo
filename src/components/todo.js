/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

import './todo.scss';

function ToDo (props) {
  let [listAll, setList] = useState([]);
  const addItem = (item) => {
    item._id = Math.floor(Math.random() * 1000000);
    item.complete = false;
    setList( [...listAll, item]);
    // console.log("itemitemitem",item);
    localStorage.setItem('listAll', JSON.stringify( [...listAll, item]));
  };

  const toggleComplete = id => {
    let item = listAll.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      let list = listAll.map(listItem => listItem._id === item._id ? item : listItem);
      setList(list);
    }
  };

  useEffect(()=> {
    let listView = JSON.parse(localStorage.getItem('listAll'))||[];
    setList(listView);
  }, []);

  const handleDelete =(_id) =>{
    // listAll.splice(1,1)
    let listToDelete = [_id];
    let result = listAll.filter( el => (-1 == listToDelete.indexOf(el._id)) );
    localStorage.setItem('listAll', JSON.stringify( result));
    console.log('arrarrarrarr',result);
    setList(result);
  };
  const handleUpdate =(i) =>{
    // listAll.splice(1,1)
    let input = document.getElementsByName(i)[0].value;
    listAll[i].text = input;
    localStorage.setItem('listAll', JSON.stringify( listAll));
    console.log('arrarrarrarr',listAll);
    setList(listAll);
    window.location.reload(true);
  };

  return (
    <>
      <header>
        <h2>
          There are {listAll.filter(item => !item.complete).length} Items To Complete
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={addItem} />
        </div>

        <div>
          <TodoList
            list={listAll}
            handleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        </div>
      </section>

    </>
  );
}

export default ToDo;
