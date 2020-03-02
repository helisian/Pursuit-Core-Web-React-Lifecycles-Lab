import React from 'react'

const Form = ({todoInput, handleSubmit}) => {
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name={todoInput.value} {...todoInput}/>
        </form>
    )
}

export default Form