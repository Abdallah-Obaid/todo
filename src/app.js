/* eslint-disable no-unused-vars */
import React from 'react';
import ToDo from './components/todo.js';
import Header from './components/header';
import Footer from './components/footer';
// import the css file
import 'bootstrap/dist/css/bootstrap.min.css';

function App (){
  return (
    <>
      <Header/>
      <ToDo />
      <Footer/>
      
    </>
  );
}

export default App;