import React from 'react';
import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
      <Task 
        name="primera tarea" 
        description="Aprender React" 
      />
      <Task 
        name="Segunda tarea" 
        description="Aprender a usar componentes" 
      />
    </div>
  );
}

export default App;
