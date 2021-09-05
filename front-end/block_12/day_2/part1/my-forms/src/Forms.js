import React from 'react';

class Forms extends React.Component {
  constructor() {
    super();

    this.changeText = this.changeText.bind(this);
    this.state = {
      onChangeText: '',
    }
  }

  changeText(event) {
    this.setState({ onChangeText: event.target.value })
  }

  render() {
    return (
      <div>
        <h1>My Forms - React</h1>
        <form className='forms'>
          <label>
            <select>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </label>

          <label>
            <input type="number" value={this.state.onChangeText} onChange={this.changeText}/>
          </label>
          <label>
            <input type="text"/>
          </label>
          <label>
            <textarea rows="5" cols="33"/>
          </label>
        </form>
      </div>
    );
  }
}

export default Forms;
