import React from 'react';
import { NavLink } from "react-router-dom";

export const LogoHomeLink = () => {
    return (
        <div className="chi" style={{ paddingLeft: '2vw', display: "flex", flexDirection: 'row' }}>
            <p style={{ fontFamily: 'sans-serif', border: '2px solid white', padding: '2px' }} ><NavLink style={{ color: 'white', textDecoration: 'none', fontWeight: 'bolder' }} to="/">CM </NavLink></p>
            <p style={{ fontFamily: 'sans-serif', padding: '2px' }} ><NavLink style={{ fontWeight: 'bolder', color: 'white', textDecoration: 'none' }} to="/"> &nbsp;&nbsp; Full Stack Software Developer&nbsp;&nbsp;</NavLink></p>
        </div>
    )
}
