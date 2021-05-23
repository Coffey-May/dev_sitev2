import React, { useState } from "react"
import { useAuth } from "../../AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
    const [error, setError] = useState("")
    const { logout } = useAuth()
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

        <div className="flex-row-between">

            <div>
                <Link>
                    <li style={{ paddingRight: '2vw' }} className="chi"
                        onClick={handleLogout}>
                        <span className=" chi glyphicon glyphicon-log-out"></span>
                  Log Out </li>
                </Link>
            </div>

            {error}
            <div>
                <Link to="/update-profile" >
                    <li className="chi"><span className=" chi glyphicon glyphicon-user"></span> Profile</li>
                </Link>
            </div>
        </div>


    )
}