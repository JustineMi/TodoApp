import React from 'react'

function TodoItem({ task, deleteTask, toggleCompleted }) {
  const handleChange = () => {
    toggleCompleted(task.id)
  }

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleChange}
      />
      <p>{task.text}</p>
      <button onClick={() => deleteTask(task.id)}>✘</button>
    </div>
  )
}

export default TodoItem