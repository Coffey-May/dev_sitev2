import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "./contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { FaCopyright } from 'react-icons/fa';

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassword, updateEmail } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        const promises = []
        setLoading(true)
        setError("")

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises)
            .then(() => {
                history.push("/")
            })
            .catch(() => {
                setError("Failed to update account")
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <>
            <div id="projectBG" style={{ height: '80vh' }}>
                <div style={{ height: '15vh' }}></div>
                <div id="projectBG2" style={{ color: 'white', width: '60vw', margin: '0 auto', padding: '2rem', backgroundColor: 'rgba(0,0,0, 8.5)' }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Update Profile</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        autoComplete="on"
                                        type="email"
                                        ref={emailRef}
                                        required
                                        defaultValue={currentUser.email}
                                    />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        autoComplete="on"
                                        type="password"
                                        ref={passwordRef}
                                        placeholder="Leave blank to keep the same"
                                    />
                                </Form.Group>
                                <Form.Group id="password-confirm">
                                    <Form.Label>Password Confirmation</Form.Label>
                                    <Form.Control
                                        autoComplete="on"
                                        type="password"
                                        ref={passwordConfirmRef}
                                        placeholder="Leave blank to keep the same"
                                    />
                                </Form.Group>
                                <Button disabled={loading} className="w-100" type="submit">
                                    Update
            </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        <Link to="/">Cancel</Link>
                    </div>
                </div></div>


            <footer id="footer2" style={{ border: '1px solid black', height: '10vh', backgroundColor: 'black', color: 'white' }}>
                <br />
                <FaCopyright /> COPYRIGHT2020
</footer>
        </>
    )
}