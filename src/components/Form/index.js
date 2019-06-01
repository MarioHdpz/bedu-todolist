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
          <button 
            onClick={() => this.props.onButtonClick(this.state.input)}
            class="button">{this.props.name}
          </button>
        </div>
      )
    }
  }

  export default Form;