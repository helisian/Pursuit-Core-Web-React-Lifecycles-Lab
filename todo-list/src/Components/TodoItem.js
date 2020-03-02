import React from 'react';

const TodoItem = ({todoInput, handleRemove, key}) => {

    return (
        <div>
            <p name={todoInput} key={key}>{todoInput}</p>
            <button name={todoInput} onClick={(event) => {handleRemove(event)}}>X</button>
        </div>
    )
}


export default TodoItem