import React from 'react';
import { useAuth } from "../../AuthContext";
import Dashboard from '../Auth/Dashboard';
import { NavLink } from "react-router-dom";

export const LoginOptions = () => {
    const { currentUser } = useAuth()
    if (currentUser === null) {
        var link = <div className="flex-row-between">
            <NavLink to="/login" className="chi nav-link">
                <li style={{ paddingRight: '2vw' }}><span className="glyphicon glyphicon-log-in"></span> Login</li>
            </NavLink>
            <NavLink to="/signup" className="chi nav-link">
                <li><span className="glyphicon glyphicon-user"></span> Sign Up</li>
            </NavLink>
        </div>
    } else if (currentUser != null) {
        link = <Dashboard />
    }
    return (
        <div style={{ width: '30%', marginRight: '1vw' }}>
            {link}
        </div>
    )
}
