import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todoList}) => {

    const todoList = todoList.map( (todo,i) => {
        return <TodoItem key={i}/>
    })

    return (
        {<}
    )
}


export default TodoList