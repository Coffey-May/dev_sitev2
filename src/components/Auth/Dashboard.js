import React, { useState } from "react"
import { useAuth } from "../../AuthContext"
import { Link, useHistory } from "react-router-dom"

//Log Out and Profile Component

const linkStyle = { marginLeft: '2vw', cursor: 'pointer', color: 'white', fontFamily: 'sans-serif', padding: '2px', fontWeight: 'bolder' }

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
                <li className="chi" onClick={handleLogout} style={linkStyle}><span className=" chi glyphicon glyphicon-log-out"></span> Log Out</li>
            </div>
            <Link style={linkStyle} to="/update-profile" >
                <li className="chi"><span className=" chi glyphicon glyphicon-user"></span> Profile</li>
            </Link>

        </>
    )
}