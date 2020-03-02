import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Components/Form'
import TodoList from './Components/TodoList'
import {useInput} from './Utils/customHookery'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const App = () => {
  const todoInput = useInput("")
  const [todoList, setTodoList] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    setTodoList([...todoList, todoInput.value])
    notify(`${todoInput.value} has been Added`)
  }

  const handleRemove = (event) => {
    let removeTodo = event.target.name
    setTodoList(todoList.filter(todo => todo !== removeTodo))
    notify(`${todoInput.value} has been Removed`)
  }

  const notify = (todo) => {
    toast(todo);
  }

  return (
    <div className="App">
      <ToastContainer />
      <Form todoInput={todoInput} handleSubmit={handleSubmit}/>
      <TodoList todoList={todoList} handleRemove={handleRemove}/>
    </div>
  )

}

export default App;
