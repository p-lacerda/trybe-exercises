import React from 'react';

class Forms extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      optionInput: '',
      numberInput: 0,
      textInput: '',
      textArea: '',
    }
  }

  handleChange({ target }) {
    const { name, value } = target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <fieldset>
        <legend>My First Forms</legend>
        <form className='forms'>
          <label>
            <select name="optionInput" value={this.state.optionInput} onChange={this.handleChange}>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </label>

          <label>
            <input type="number" name="numberInput" value={this.state.numberInput} onChange={this.handleChange}/>
          </label>
          <label>
            <input type="text" name="textInput" value={this.state.textInput} onChange={this.handleChange}/>
          </label>
          <label>
            <textarea rows="5" cols="33" name="textArea" value={this.state.textArea} onChange={this.handleChange}/>
          </label>
          <label>
            <input type="file" />
          </label>
        </form>
      </fieldset>
    );
  }
}

export default Forms;
