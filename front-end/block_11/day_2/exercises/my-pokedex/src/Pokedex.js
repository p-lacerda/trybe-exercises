import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemonsInfo } = this.props

    return(
      <div>
        {pokemonsInfo.map((species) => <Pokemon key={species.id} pokemons={species} />)}
      </div>
    )
  }
}

export default Pokedex;