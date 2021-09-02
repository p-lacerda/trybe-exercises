import React from 'react'

class Serie extends React.Component {
  render() {

    const { name, img, genre } = this.props.seriesInfo;
    return (
      <section>
      <h1>name: {name}</h1>
      <img src={img} alt={name}></img>
      <p>Genero: {genre}</p>
      </section>
    )
  }
}

export default Serie;