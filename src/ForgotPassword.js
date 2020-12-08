import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "./contexts/AuthContext"
import { Link } from "react-router-dom"
import { FaCopyright } from 'react-icons/fa';


export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
        } catch {
            setError("Failed to reset password")
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
                            <h2 className="text-center mb-4">Password Reset</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            {message && <Alert variant="success">{message}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Button disabled={loading} className="w-100" type="submit">
                                    Reset Password
            </Button>
                            </Form>
                            <div className="w-100 text-center mt-3">
                                <Link to="/login">Login</Link>
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