import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todoList}) => {

    const todoList = todoList.map( (todo,i) => {
        return <TodoItem todoInput={todoInput} key={i}/>
    })

    return (
        <div>
            {todoList}
        </div>
    )
}


export default TodoList