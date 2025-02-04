import React, { useRef } from 'react'

function Form({ addTask }) {
  const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    const newText = inputRef.current.value
    addTask(newText)
    inputRef.current.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        placeholder="Write a new task to do"
      />
      <button type="submit">Add task</button>
    </form>
  )
}

export default Form