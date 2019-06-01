import React from 'react';
import './App.css';
import Task from './components/Task';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Form />
      <Task 
        name="primera tarea" 
        description="Aprender React" 
      />
    </div>
  );
}

export default App;
