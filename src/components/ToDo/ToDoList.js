import React from 'react'
import SingleTodo from './SingleTodo'


const ToDoList = ({ todos, setTodos, filteredTodos }) => {
    return (

        <div>
            <ul className="tilesWrap" style={{ display: 'flex', flexDirection: 'column', margin: '0 auto', justifyContent: 'left' }}>
                {filteredTodos.map(todo => (<SingleTodo todo={todo} todos={todos} setTodos={setTodos} text={todo.text} key={todo.id} />))}
            </ul>
        </div>

    )
}
export default ToDoList