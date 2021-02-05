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


                <input value={inputText} onChange={setInputTextHandler} type="text" placeholder="Task?" />

                <button className="button1" onClick={submitTodoHandler}>Add</button>
                <br /><br />
                <h4 style={{ color: 'white' }}>𝔽𝕚𝕝𝕥𝕖𝕣 𝕥𝕒𝕤𝕜𝕤 𝕓𝕪 𝕔𝕠𝕞𝕡𝕝𝕖𝕥𝕚𝕠𝕟 𝕤𝕥𝕒𝕥𝕦𝕤.</h4>
                <select className="select-css" onChange={statusHandler} name="" id="">
                    <option value="all ">Filter options   ⟱</option>
                    <option value="all ">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </form>
        </div>
    )
}
export default ToDoForm