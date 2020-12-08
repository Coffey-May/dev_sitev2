import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "./contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { FaCopyright } from 'react-icons/fa';



export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const userNameRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const { currentUser } = useAuth()


    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)

            await login(emailRef.current.value, passwordRef.current.value)

            history.push("/")
            // console.log(currentUser.email)

        } catch {
            setError("Failed to log in")
        }

        setLoading(false)
    }

    return (
        <>
            <div id="projectBG" style={{ height: '80vh' }}>
                <div style={{ height: '20vh' }}></div>
                <div id="projectBG2" style={{ color: 'white', width: '60vw', margin: '0 auto', padding: '2rem', backgroundColor: 'rgba(0,0,0, 8.5)' }}>
                    <Card>
                        <Card.Body>
                            <h2 style={{ margin: '0 auto' }} className="text-center mb-4">Log In</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit} autoComplete="on">
                                {/* <Form.Group id="email">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control autoComplete="on" type="text" ref={userNameRef} required />
                        </Form.Group> */}
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control autoComplete="on" type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control autoComplete="on" type="password" ref={passwordRef} required />
                                </Form.Group>
                                <Button disabled={loading} className="w-100" type="submit">
                                    Log In
            </Button>
                            </Form>
                            <div className="w-100 text-center mt-3">
                                <Link to="/forgot-password">Forgot Password?</Link>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Need an account? <Link to="/signup">Sign Up</Link>
                    </div>
                </div>
            </div>
            <footer id="footer2" style={{ border: '1px solid black', height: '10vh', backgroundColor: 'black', color: 'white' }}>
                <br />
                <FaCopyright /> COPYRIGHT2020
</footer>
        </>
    )
}