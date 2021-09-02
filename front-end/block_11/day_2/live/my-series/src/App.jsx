import React from 'react';
import SerieList from './components/SerieList';
import './App.css';

import catalog from './data'

class App extends React.Components() {
  render() {
    return (
    <main className ="main-container">
      <h1>Hello pessoas bonitas</h1>
      <SerieList catalog={ catalog }/>
    </main>
      );
  }
}

export default App;
