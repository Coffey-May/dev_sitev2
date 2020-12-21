import React, { useState } from 'react'
import ToDoForm from './TodoForm'
import ToDoList from './ToDoList'
import { FaCopyright } from 'react-icons/fa';

const TodoApp = () => {
    const [inputText, setInputText] = useState('')
    const [Todos, setTodos] = useState([])
    return (
        <div>

            <div style={{ height: '80vh', backgroundColor: 'gray' }} >


                <h1 style={{ margin: '0 auto', paddingTop: '10vh' }}>To Do Organizer{inputText}</h1>
                <ToDoForm setInputText={setInputText} />
                <ToDoList Todos={Todos} setTodos={setTodos} />
            </div>

            <footer id="footer2" style={{ border: '1px solid black', height: '10vh', backgroundColor: 'black', color: 'white' }}>


                <br />
                <FaCopyright /> COPYRIGHT{new Date().getFullYear()}
            </footer>
        </div>
    )
}
export default TodoApp