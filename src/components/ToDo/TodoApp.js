import React, { useState, useEffect } from 'react'
import ToDoForm from './TodoForm'
import ToDoList from './ToDoList'
import { FaCopyright } from 'react-icons/fa';
import { useAuth } from "../../contexts/AuthContext"
import { NavLink } from "react-router-dom";
import "./ToDo.css"
//
const TodoApp = () => {
    const { currentUser } = useAuth();
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

    if (currentUser === null) {
        return (
            <div>
                <h4>Welcome, please log in to use this feature</h4>
                {/* <button>Log In */}
                <button class="glow-on-hover" type="button">HOVER ME, THEN CLICK ME!</button>
                <NavLink to="/login" style={{ paddingTop: '2px', marginLeft: '2vw', textDecoration: 'none', color: 'white' }} className="chi nav-link">
                    Log In
                    </NavLink>
                {/* </button> */}
            </div>
        )
    } else if (currentUser != null && localStorage.getItem("todo_user")
    ) {
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
}
export default TodoApp