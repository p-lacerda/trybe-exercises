import React from 'react';


class Button extends React.Component {
  constructor() {
    super();
    this.buttonClick = this.buttonClick.bind(this)
    this.buttonClick2 = this.buttonClick2.bind(this)
    this.buttonClick3 = this.buttonClick3.bind(this)
  }

  buttonClick () {
    console.log('Texto 1')
  }
  
  buttonClick2 () {
    console.log('Texto 2')
  }
  
  buttonClick3 () {
    console.log('Texto 3')
  }
  

  render() {
    return (
      <span>
      <button onClick={this.buttonClick}>Button 1</button>
      <button onClick={this.buttonClick2}>Button 2</button>
      <button onClick={this.buttonClick3}>Button 3</button>
      </span>
    );
  }
}

export default Button