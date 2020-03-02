import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Components/Form'
import TodoList from './Components/TodoList'
import {useInput} from './Utils/customHookery'

const App = () => {
  const todoInput = useInput("")
  const [todoList, setTodoList] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    setTodoList([...todoList, todoInput.value])
  }

  const handleRemove = (event) => {
    let removeTodo = event.target.name
    setTodoList(todoList.filter(todo => todo !== removeTodo))
  }

  return (
    <div className="App">
      <Form todoInput={todoInput} handleSubmit={handleSubmit}/>
      <TodoList todoList={todoList} handleRemove={handleRemove}/>
    </div>
  )

}

export default App;
