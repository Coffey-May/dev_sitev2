import React from 'react';
import { useAuth } from "../../AuthContext";
import Dashboard from '../Auth/Dashboard';
import { NavLink } from "react-router-dom";

export const LoginOptions = () => {
    const { currentUser } = useAuth()
    if (currentUser === null) {
        var link = <div>
            <NavLink to="/login" className="chi nav-link">
                <li><span className="glyphicon glyphicon-log-in"></span> Login</li>
            </NavLink>
            <NavLink to="/signup" className="chi nav-link">
                <li><span className="glyphicon glyphicon-user"></span> Sign Up</li>
            </NavLink>
        </div>
    } else if (currentUser != null) {
        link = <Dashboard />
    }
    return (
        <div>
            {link}
        </div>
    )
}
