import React, { useState, useEffect } from 'react'
import ToDoForm from './TodoForm'
import ToDoList from './ToDoList'
import { FaCopyright } from 'react-icons/fa';

const TodoApp = () => {
    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState("all")
    const [filteredTodos, setFilteredTodos] = useState([])

    useEffect(() => {
        getLocalTodos()
    }, [])
    useEffect(() => {
        filterHandler()
        saveLocalTodos()
    }, [todos, status])

    const filterHandler = e => {
        switch (status) {
            case "completed":
                setFilteredTodos(todos.filter((todo) => todo.completed === true))
                break;
            case "incomplete":
                setFilteredTodos(todos.filter((todo) => todo.completed === false))
                break;
            default:
                setFilteredTodos(todos)
                break;
        }
    };

    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }

    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]))
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"))
            setTodos(todoLocal)
        }
    }
    return (
        <div>

            <div style={{ height: '80vh', backgroundColor: 'gray' }} >
                <h1 style={{ margin: '0 auto', paddingTop: '10vh' }}>To Do Organizer</h1>
                <ToDoForm
                    todos={todos}
                    setTodos={setTodos}
                    inputText={inputText}
                    setInputText={setInputText}
                    setStatus={setStatus} />
                <ToDoList
                    todos={todos}
                    setTodos={setTodos}
                    filteredTodos={filteredTodos} />
            </div>

            <footer id="footer2" style={{ border: '1px solid black', height: '10vh', backgroundColor: 'black', color: 'white' }}>
                <br />
                <FaCopyright /> COPYRIGHT{new Date().getFullYear()}
            </footer>
        </div>
    )
}
export default TodoApp