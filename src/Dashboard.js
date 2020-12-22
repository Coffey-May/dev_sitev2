import React, { useState } from "react"
// import { Card, Button, Alert } from "react-bootstrap"
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

            <div className="chi w-100 text-center mt-2">
                {/* <Button variant="link" onClick={handleLogout}>
                    Log Out
                    
        </Button> */}


                <li className="chi" onClick={handleLogout} style={{ marginLeft: '2vw', cursor: 'pointer', color: 'white', fontFamily: 'sans-serif', padding: '2px' }}><span className=" chi glyphicon glyphicon-log-out"></span> Log Out</li>
                {/* <li onClick={handleLogout} style={{ paddingLeft: '2vw', margin: '0 auto', cursor: 'pointer', color: 'white', fontFamily: 'sans-serif', padding: '2px' }} >Log Out </li> */}


            </div>
            {/* <Card>
                <Card.Body> */}
            {/* <h5 style={{ cursor: 'pointer', color: 'white', fontFamily: 'sans-serif', padding: '2px' }} className="text-center mb-4">Profile</h5> */}
            {/* {error && <Alert variant="danger">{error}</Alert>} */}
            {/* <strong>Email:</strong> {currentUser.email} */}



            <Link style={{ marginLeft: '2vw', cursor: 'pointer', color: 'white', fontFamily: 'sans-serif', padding: '2px', textDecoration: 'none', fontWeight: 'bolder' }} to="/update-profile" >
                <li className="chi"><span className=" chi glyphicon glyphicon-user"></span> Profile</li>
            </Link>
            {/* </Card.Body>
            </Card> */}
        </>
    )
}