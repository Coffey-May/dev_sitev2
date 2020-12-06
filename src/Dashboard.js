import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "./contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
// import { NavLink } from "react-router-dom";

export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/")
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <>

            <div className="w-100 text-center mt-2">
                {/* <Button variant="link" onClick={handleLogout}>
                    Log Out
                    
        </Button> */}


                <li onClick={handleLogout} style={{ paddingLeft: '2vw', margin: '0 auto', cursor: 'pointer', color: 'white', fontFamily: 'sans-serif', padding: '2px' }}><a style={{ color: 'white', paddingLeft: '2vw', fontWeight: 'bolder' }} href="#"><span class="glyphicon glyphicon-log-out"></span> Log Out</a></li>
                {/* <li onClick={handleLogout} style={{ paddingLeft: '2vw', margin: '0 auto', cursor: 'pointer', color: 'white', fontFamily: 'sans-serif', padding: '2px' }} >Log Out </li> */}


            </div>
            {/* <Card>
                <Card.Body> */}
            {/* <h5 style={{ cursor: 'pointer', color: 'white', fontFamily: 'sans-serif', padding: '2px' }} className="text-center mb-4">Profile</h5> */}
            {/* {error && <Alert variant="danger">{error}</Alert>} */}
            {/* <strong>Email:</strong> {currentUser.email} */}



            <Link style={{ marginLeft: '2vw', cursor: 'pointer', color: 'white', fontFamily: 'sans-serif', padding: '2px', textDecoration: 'none' }} to="/update-profile" >
                <li ><a style={{ color: 'white', fontWeight: 'bolder' }} href="#"><span class="glyphicon glyphicon-user"></span> Profile</a></li>
            </Link>
            {/* </Card.Body>
            </Card> */}
        </>
    )
}