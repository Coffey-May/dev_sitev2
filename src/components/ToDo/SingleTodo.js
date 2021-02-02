import React from 'react'


//Single To Do Component


const SingleTodo = ({ text, todo, todos, setTodos }) => {
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
    return (
        <div style={{ margin: '0 auto', textAlign: 'center' }}>
            <li style={{ color: 'white' }} className={`todo-item ${todo.completed ? "completed" : ""}`}>

                {text}
                <button onClick={completedHandler}>Complete</button>
                <button onClick={deleteHandler}>Delete</button>
            </li>

        </div>
    )
}
export default SingleTodo