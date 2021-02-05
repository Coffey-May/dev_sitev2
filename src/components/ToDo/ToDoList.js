import React from 'react'
import SingleTodo from './SingleTodo'


const ToDoList = ({ currentId, setCurrentId, editMessage, setEditMessage, inputText, setInputText, todos, setTodos, filteredTodos }) => {
    return (

        <div>
            <ol className="tilesWrap" style={{ display: 'flex', flexDirection: 'column', marginLeft: '2em' }}>
                {filteredTodos.map(todo => (<SingleTodo currentId={currentId} setCurrentId={setCurrentId} editMessage={editMessage} setEditMessage={setEditMessage} inputText={inputText} setInputText={setInputText} todo={todo} todos={todos} setTodos={setTodos} text={todo.text} key={todo.id} />))}
            </ol>
        </div>

    )
}
export default ToDoList