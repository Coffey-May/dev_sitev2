import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";

import { useHistory } from "react-router-dom";
import { FaCopyright } from 'react-icons/fa';

import { useAuth } from "../../AuthContext";



export default function UserName() {
    const usernameRef = useRef()
    const history = useHistory()
    const { currentUser } = useAuth()

    async function handleUserNameSubmit(e) {
        e.preventDefault()

        try {
            if (currentUser != null) {
                const username = await usernameRef.current.value
                currentUser['name'] = username;
                console.log(currentUser.name)
                history.push("/")

                return currentUser

            } else if (currentUser === null) {
                alert('You must Log In to create a User Name...')
            }
        } catch {
            // setError("Failed to log in")
        }


    }
    return (
        <div>
            <div id="projectBG" style={{ height: '80vh' }}>
                <div style={{ height: '15vh' }}></div>
                <div id="projectBG2" style={{ color: 'white', width: '60vw', margin: '0 auto', padding: '2rem', backgroundColor: 'rgba(0,0,0, 8.5)' }}>
                    <Card>
                        <Card.Body>
                            <h2 style={{ margin: '0 auto' }} className="text-center mb-4">Select User Name</h2>

                            <Form onSubmit={handleUserNameSubmit} autoComplete="on">

                                <Form.Group id="userName">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control placeholder="Enter user name" autoComplete="on" type="text" ref={usernameRef} required />
                                </Form.Group>

                                <Button className=" chi w-100" type="submit">
                                    Save User Name
            </Button>
                            </Form>

                        </Card.Body>
                    </Card>

                </div>
            </div>
            <footer id="footer2" style={{ border: '1px solid black', height: '10vh', backgroundColor: 'black', color: 'white' }}>
                <br />
                <FaCopyright /> COPYRIGHT{new Date().getFullYear()}
            </footer>
        </div>
    )
}
