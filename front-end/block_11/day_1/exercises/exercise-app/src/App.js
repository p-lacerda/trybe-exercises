import React, { Component } from 'react';
import './App.css';

const arr = ['item1', 'item2', 'item3']

const Task = (value) => {
  return (
    <>
    {value.map((element) => <li> {element} </li>)}
    </>
  );
}

class App extends Component {
  render() {
    return (
      <div>
      { Task(arr) }
      </div>
    );
  }
}

export default App;
