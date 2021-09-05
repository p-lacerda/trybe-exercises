import React from 'react';

function buttonClick () {
  console.log('Texto 1')
}

function buttonClick2 () {
  console.log('Texto 2')
}

function buttonClick3 () {
  console.log('Texto 3')
}

class Button extends React.Component {
  render() {
    return (
      <span>
      <button onClick={buttonClick}>Button 1</button>
      <button onClick={buttonClick2}>Button 2</button>
      <button onClick={buttonClick3}>Button 3</button>
      </span>
    );
  }
}

export default Button