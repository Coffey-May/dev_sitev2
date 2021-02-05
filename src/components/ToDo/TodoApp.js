import React, { useState, useEffect } from 'react'
import ToDoForm from './TodoForm'
import ToDoList from './ToDoList'
import { FaCopyright } from 'react-icons/fa';
import { useAuth } from "../../Contexts/AuthContext"
import { NavLink } from "react-router-dom";
import "./ToDo.css"
//Todo Component 
const TodoApp = () => {
    const { currentUser } = useAuth();
    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState("all")
    const [filteredTodos, setFilteredTodos] = useState([])
    const [editMessage, setEditMessage] = useState(false)
    const [currentId, setCurrentId] = useState(0)


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
                <h2>Please log in to use this feature</h2>


                <NavLink to="/login" style={{ paddingTop: '2px', textDecoration: 'none', color: 'white' }} className="chi nav-link">
                    <button class="glow-on-hover" type="button">Log In</button>
                </NavLink>

            </div>
        )
    } else if (currentUser != null && localStorage.getItem("todo_user")
    ) {
        return (
            <div>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>

                    <div style={{ width: '40vw', height: '80vh', backgroundColor: '#eb3495' }} >
                        <h1 style={{ margin: '0 auto', paddingTop: '10vh' }}>TASK MANAGER</h1>
                        <ToDoForm
                            currentId={currentId}
                            setCurrentId={setCurrentId}
                            editMessage={editMessage}
                            setEditMessage={setEditMessage}
                            todos={todos}
                            setTodos={setTodos}
                            inputText={inputText}
                            setInputText={setInputText}
                            setStatus={setStatus} />
                    </div>
                    <div style={{ width: '60vw', height: '80vh', backgroundColor: 'black' }}>
                        <ToDoList
                            currentId={currentId}
                            setCurrentId={setCurrentId}
                            editMessage={editMessage}
                            setEditMessage={setEditMessage}
                            inputText={inputText}
                            setInputText={setInputText}
                            todos={todos}
                            setTodos={setTodos}
                            filteredTodos={filteredTodos} />
                    </div>
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