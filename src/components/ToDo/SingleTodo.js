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
        <div className="gradient-border" id="box" style={{ margin: '5px', textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '20px' }}>
                <div style={{ height: '10px', width: '10px', backgroundColor: 'yellow' }}></div>
                <div style={{ height: '10px', width: '10px', backgroundColor: 'red' }}></div>
                <div style={{ height: '10px', width: '10px', backgroundColor: 'blue' }}></div>
                <div style={{ height: '10px', width: '10px', backgroundColor: 'white' }}></div>
            </div>

            <li style={{ width: '60vw', color: 'white' }} className={`todo-item ${todo.completed ? "completed" : ""}`}>


                <h4 style={{ letterSpacing: '.25em', margin: '0 auto', padding: '5px' }}>{text}</h4>
                <br />
                <button onClick={completedHandler}> Complete </button>
                <button onClick={editHandler}> Edit </button>
                <button onClick={deleteHandler}> Delete </button>
            </li>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '20px' }}>
                <div style={{ height: '10px', width: '10px', backgroundColor: 'yellow' }}></div>
                <div style={{ height: '10px', width: '10px', backgroundColor: 'red' }}></div>
                <div style={{ height: '10px', width: '10px', backgroundColor: 'blue' }}></div>
                <div style={{ height: '10px', width: '10px', backgroundColor: 'white' }}></div>
            </div>
        </div>
    )
}
export default SingleTodo