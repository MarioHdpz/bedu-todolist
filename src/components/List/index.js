import React from 'react';
import { Component } from 'react';
import Form from '../Form';
import Task from '../Task';
import Card from 'react-bootstrap/Card';

class List extends Component {
    state = {
      tasks: [],
    }

    addTask = input => {
      const newTasks = this.state.tasks;
      newTasks.push(input);
      this.setState({tasks: newTasks})
    }

    getBootsrapCard = (title, description) => (
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
      </Card.Body>
    </Card>
    );
    
    render = () => {
            
      return (
        <div>
          <Form
            onButtonClick={input => this.addTask(input)}
            name="Add task"
          />
          {this.state.tasks.map((task, index) => this.getBootsrapCard(`Title ${index + 1}`, task))}
        </div>
      )
    }
  }

  export default List;