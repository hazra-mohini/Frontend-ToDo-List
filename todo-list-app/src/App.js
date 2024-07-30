import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

const App = () => {
  const [newTask, setNewTask] = useState(null);

  const addTask = (task) => {
    setNewTask(task);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList newTask={newTask} />
    </div>
  );
};

export default App;
