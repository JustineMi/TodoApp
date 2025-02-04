import React from 'react'
import TodoItem from './TodoItem'

function TodoApp({ tasks, deleteTask, toggleCompleted }) {
  return (
    <div className="todo-list">
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  )
}

export default TodoApp