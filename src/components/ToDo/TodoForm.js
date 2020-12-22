import React from 'react'

const ToDoForm = ({ inputText, setInputText, todos, setTodos, setStatus }) => {

    const setInputTextHandler = e => {
        e.preventDefault()
        setInputText(e.target.value)
    }

    const submitTodoHandler = e => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 5000 }
        ])
        setInputText("")
    };

    const statusHandler = e => {
        e.preventDefault();
        setStatus(e.target.value)
    }
    return (
        <div>
            <form action="">
                <input value={inputText} onChange={setInputTextHandler} type="text" />
                <button onClick={submitTodoHandler}>Add</button>
                <select onChange={statusHandler} name="" id="">
                    <option value="completed">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </form>
        </div>
    )
}
export default ToDoForm