import React from 'react'

const ToDoForm = ({ setInputText }) => {

    const setInputTextHandler = e => {
        e.preventDefault()
        setInputText(e.target.value)
    }

    const submitTodoHandler = e => {

    }
    return (
        <div>
            <form action="">
                <input onChange={setInputTextHandler} type="text" />
                <button onClick={submitTodoHandler}>Add</button>
                <select name="" id="">
                    <option value="completed">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </form>
        </div>
    )
}
export default ToDoForm