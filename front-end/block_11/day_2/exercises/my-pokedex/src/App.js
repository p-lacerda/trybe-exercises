import React from 'react';
import Pokedex from './Pokedex'
import data from './data'

class App extends React.Component {
  render() {
    return (
      <main>
        <Pokedex pokemonsInfo={data} />
      </main>
    );
  }
}

export default App;
