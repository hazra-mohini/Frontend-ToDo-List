import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import tasksData from '../data/tasks.json';
import './TaskList.css';

const TaskList = ({ newTask }) => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  useEffect(() => {
    if (newTask) {
      setTasks(prevTasks => [...prevTasks, newTask]);
    }
  }, [newTask]);

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, ...updatedTask } : task
    ));
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="task-list">
      <input
        type="text"
        className="search-input"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={handleSearch}
      />
      {filteredTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={() => toggleComplete(task.id)}
          onUpdate={(updatedTask) => updateTask(task.id, updatedTask)}
        />
      ))}
    </div>
  );
};

export default TaskList;
