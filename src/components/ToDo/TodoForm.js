import React from 'react'

const ToDoForm = ({ currentId, setCurrentId, editMessage, setEditMessage, inputText, setInputText, todo, todos, setTodos, setStatus }) => {

    const setInputTextHandler = e => {
        e.preventDefault()
        setInputText(e.target.value)
    }

    const submitTodoHandler = e => {
        e.preventDefault();

        if (inputText === '') {
            alert("Please fill out the text field to continue...")
        }
        else if (editMessage === true) {

            console.log('form:', currentId)

            setTodos(todos.map((item) => {
                if (item.id === currentId) {
                    return {
                        ...item, text: inputText
                    }
                }

                return item
            }))

            setInputText('')
            setEditMessage(false)
        }
        else if (inputText) {
            setTodos([
                ...todos,
                { text: inputText, completed: false, id: Math.random() * 5000 }
            ])
            setInputText("")
        }
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
                    <option value="all ">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </form>
        </div>
    )
}
export default ToDoForm