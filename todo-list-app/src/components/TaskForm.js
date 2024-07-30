import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState({ title: '', description: '', completed: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title.trim()) {
      onAddTask({ ...task, id: Date.now(), timestamp: new Date().toISOString() });
      setTask({ title: '', description: '', completed: false });
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        placeholder="Task Title"
        required
      />
      <textarea
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        placeholder="Task Description"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
