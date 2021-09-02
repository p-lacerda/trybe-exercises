import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemons } = this.props
    return(
      <section>
        <p>{pokemons.name}</p>
        <p>{pokemons.type}</p>
        <p>{pokemons.averageWeight.value} {pokemons.averageWeight.measurementUnit}</p>
        <img src={pokemons.image} alt={pokemons.name}></img>
      </section>
    )
  }
}

export default Pokemon;