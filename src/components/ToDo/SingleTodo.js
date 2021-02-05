import React from 'react'





const SingleTodo = ({ currentId, setCurrentId, editMessage, setEditMessage, inputText, setInputText, text, todo, todos, setTodos }) => {
    const completedHandler = e => {
        e.preventDefault();
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }
    const deleteHandler = e => {
        e.preventDefault();
        setTodos(todos.filter((el) => el.id !== todo.id))
    }
    const editHandler = (e) => {
        todos.map((item) => {
            if (item.id === todo.id) {
                setEditMessage(true)
                setInputText(item.text)
                setCurrentId(item.id)
                console.log('single:', item.id)
            }
            return item
        })
    }
    return (
        <div class="gradient-border" id="box" style={{ margin: '0 auto', textAlign: 'center' }}>
            <li style={{ width: '60vw', color: 'white' }} className={`todo-item ${todo.completed ? "completed" : ""}`}>

                <h1 style={{ letterSpacing: '.75em', margin: '0 auto' }}>{text}</h1>
                <br />
                <button onClick={completedHandler}>Complete</button>
                <button onClick={editHandler}>Edit</button>
                <button onClick={deleteHandler}>Delete</button>
            </li>

        </div>
    )
}
export default SingleTodo