import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todoList, handleRemove}) => {

    const todoListRender = todoList.map( (todo,i) => {
        return <TodoItem todoInput={todo} key={i} handleRemove={handleRemove}/>
    })

    return (
        <div>
            {todoListRender}
        </div>
    )
}


export default TodoList