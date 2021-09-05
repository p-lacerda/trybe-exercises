import React from 'react';


class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      numeroDeCliques: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    };
    this.buttonClick = this.buttonClick.bind(this)
    this.buttonClick2 = this.buttonClick2.bind(this)
    this.buttonClick3 = this.buttonClick3.bind(this)
  }

  buttonClick () {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }
  
  buttonClick2 () {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
    }))
  }
  
  buttonClick3 () {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1
    }))
  }
  


  render() {

    const mystyle = {
      backgroundColor: "green",
    };

    return (
      <span>
      <button onClick={this.buttonClick} style={this.state.numeroDeCliques % 2 === 0? mystyle : null}>{this.state.numeroDeCliques}</button>
      <button onClick={this.buttonClick2} style={this.state.numeroDeCliques2 % 2 === 0? mystyle : null}>{this.state.numeroDeCliques2}</button>
      <button onClick={this.buttonClick3} style={this.state.numeroDeCliques3 % 2 === 0? mystyle : null}>{this.state.numeroDeCliques3}</button>
      </span>
    );
  }
}

export default Button