import React, { useState, useEffect } from 'react'
import TodoApp from './TodoApp'
import Form from './Form'
import './App.css'

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : [
      { id: 1, text: 'Wake up', completed: true },
      { id: 2, text: 'Learn React', completed: false },
      { id: 3, text: 'Sleep', completed: false },
    ]
  })

  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    if (tasks.every(task => task.completed)) {
      setShowPopup(true)
    } else {
      setShowPopup(false)
    }
  }, [tasks])

  const addTask = (text) => {
    if (text.trim() === '') return
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    }
    setTasks([...tasks, newTask])
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id)
    setTasks(filteredTasks)
  };

  const toggleCompleted = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
  };

  const closePopup = () => {
    setShowPopup(false)
  };

  return (
    <div className="App">
      <h1>My Todo App</h1>
      <Form addTask={addTask}/>
      <TodoApp tasks={tasks} deleteTask={deleteTask} toggleCompleted={toggleCompleted} />
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <img src="./pic/Quentin1.jpg" alt="congratulations" />
            <button onClick={closePopup}>Congratulations, you're done!</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
