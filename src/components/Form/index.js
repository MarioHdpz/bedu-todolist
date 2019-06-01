import React from 'react';
import { Component } from 'react';

class Form extends Component {
    state = {
      input: '',
    }
    
    handleInputChange = event => {
      const value = event.target.value;
      this.setState({input: value});
    }
    
    render = () => {
            
      return (
        <div>
          <input 
            className="input"
            value={this.state.input}
            onChange={event => this.handleInputChange(event)}
          />
          <button class="button">Add</button>
        </div>
      )
    }
  }

  export default Form;