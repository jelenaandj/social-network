import React from 'react';
import './App.css';
import Form from './Form';
const data = require('./data.json');


function App(props) {

  return (
    <div>
      <Form data={data}/>



    </div>
  );
}

export default App;
