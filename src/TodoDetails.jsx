import React from 'react';

export default function TodoDetails({
  todoInfo,
  handleDeletion,
  handleCompletion,
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'Center',
      }}
      className="border p-2 mt-2"
    >
      <p
        style={{
          textDecoration: todoInfo.isCompleted ? 'line-through' : 'none',
        }}
      >
        {todoInfo.todoName}
      </p>

      <div>
        <button
          className="btn btn-danger me-2"
          onClick={() => handleDeletion(todoInfo.id)}
        >
          Delete
        </button>
        <button
          className="btn btn-primary"
          onClick={() => handleCompletion(todoInfo.id)}
        >
          Complete
        </button>
      </div>
    </div>
  );
}
