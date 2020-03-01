import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Components/Form'
import TodoList from './Components/TodoList'
import {useInput} from './Utils/customHookery'

const App = () => {
  const [todoInput, setTodoInput] = useInput("")
  const [todoList, setTodoList] = useState([])

  

  const handleSubmit = (event) => {
    event.preventDefault()
  }
 
  return (
    <div className="App">
      <Form todoInput={todoInput} handleSubmit={handleSubmit} handleChange={handleChange}/>
      <TodoList />
    </div>
  )

}


export default App;
