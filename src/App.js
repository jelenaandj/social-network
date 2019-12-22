import React from 'react';
import './App.css';
import Form from './Form';
import Header from './Header';
const data = require('./data.json');


function App(props) {

  return (
    <div className='App'>
      <Header/>
      <Form data={data}/>
    </div>
  );
}

export default App;
