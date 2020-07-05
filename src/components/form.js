/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function TodoForm (props) {

  let [allItem, setItem] = useState({});
  const handleInputChange = e => {
    setItem({...allItem, [e.target.name]: e.target.value } );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(allItem);
    const item = {};
    setItem(item);
  };


  return (
    <>
      <main>
        <Form onSubmit={handleSubmit}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Add To Do Item Item</Card.Title>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>To Do Item</Form.Label>
                <Form.Control type="text" name="text" placeholder="Item Details" onChange={handleInputChange}/>
              </Form.Group>
              <label>
                <span>Difficulty Rating</span>
                <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
              </label>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Assigned To</Form.Label>
                <Form.Control type="text" name="assignee" placeholder="Assignee Name" onChange={handleInputChange}/>
              </Form.Group>
              <Button type="submit" variant="primary">Add Item</Button>
            </Card.Body>
          </Card>
        </Form>
      </main>
    </>
  );
}



export default TodoForm;
