import React from 'react';
import { NavLink } from "react-router-dom";
import { LoginOptions } from "./LoginOptions"

export const PrimaryLinks = () => {
    return (
        <div className="flex-row-between">
            <NavLink to="/" className="chi" >
                <li className="active" ><span className="glyphicon glyphicon-home"></span> Home</li>
            </NavLink>
            <NavLink to="/projects" className="chi">
                <li className="active"> <span className="glyphicon glyphicon-th-list"></span> Projects </li>
            </NavLink>
            <NavLink to="/contact" className=" chi">
                <li className="active"> <span className=" glyphicon glyphicon-envelope"></span>  Contact </li>
            </NavLink>
            <LoginOptions />

        </div>
    )
}

