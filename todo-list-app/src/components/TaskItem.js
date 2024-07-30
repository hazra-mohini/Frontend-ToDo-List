import React, { useState } from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onToggleComplete, onUpdate }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleUpdate = () => {
    onUpdate(updatedTask);
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      <h3 className="task-title" onClick={() => setIsExpanded(!isExpanded)}>
        {task.title}
      </h3>
      {isExpanded && (
        <div>
          {isEditing ? (
            <div>
              <textarea
                value={updatedTask.description}
                onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })}
              />
              <button className="edit-button" onClick={handleUpdate}>Save</button>
            </div>
          ) : (
            <div>
              <p className="task-description">{task.description}</p>
              <p className="timestamp">Last updated: {new Date(task.timestamp).toLocaleString()}</p>
              <button className="edit-button" onClick={() => setIsEditing(true)}>Edit</button>
            </div>
          )}
          <button className="complete-button" onClick={onToggleComplete}>
            {task.completed ? 'Mark as Incomplete' : 'Mark as Done'}
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
