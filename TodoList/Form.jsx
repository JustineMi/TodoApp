import React, { useRef } from 'react'


function Form({ addTask, checkAll, openConfirmation}) {
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
      <button type='button' onClick={checkAll}>Check all tasks</button>
      <button type="submit">Add task</button>
      <button type="button" onClick={openConfirmation}>Delete all tasks</button>
    </form>
  )
}

export default Form