import React, { useState, useEffect } from 'react'
import TodoApp from './TodoApp'
import Form from './Form'
import './App.css'
import QuentinImage from "./src/Quentin1.jpg"
import Calendar from "react-calendar"

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
  const [showConfirmation, setShowConfirmation] = useState(false)

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
  }

  const checkAll =() =>{
    setTasks(tasks.map(task => ({...task, completed: true})))
  }

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id)
    setTasks(filteredTasks)
  }

  const deleteAllTask =() =>{
    setTasks([])
  }

  const toggleCompleted = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
  }

  const closePopup = () => {
    setShowPopup(false)
  }

  const openConfirmation = () => {
    setShowConfirmation(true)
  }

  const closeConfirmation = () => {
    setShowConfirmation(false)
  }

  const confirmDeleteAll = () => {
    deleteAllTask()
    closeConfirmation()
  }

  return (
    <div className="App">
      <h1>My Todo App</h1>
      <Form addTask={addTask} checkAll={checkAll} openConfirmation={openConfirmation}/>
      <TodoApp tasks={tasks} deleteTask={deleteTask} toggleCompleted={toggleCompleted} />
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <img src={QuentinImage} alt="Quentin à Infrabel" />
            <button onClick={closePopup}>Congratulations, you're done!🎉</button>
          </div>
        </div>
      )}
      {showConfirmation && (
        <div className='confirmation-popup'>
          <div className='confirmation-popup-content'>
            <p>Are you sure you want to delete all tasks??🤨</p>
            <button onClick={confirmDeleteAll}>Yes, delete !!</button>
            <button onClick={closeConfirmation}>No, cancel !!</button>
            </div>
          </div>
      )}
    </div>
  )
}

export default App