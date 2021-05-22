import React from 'react';
import { NavLink } from "react-router-dom";

export const LogoHomeLink = () => {
    return (
        <div className="chi" style={{ display: "flex", flexDirection: 'row', fontFamily: 'sans-serif', }}>
            <NavLink style={{ textDecoration: 'none' }} to="/">
                <p style={{
                    border: '2px solid white',
                    padding: '2px',
                    color: 'white',

                }} >CM
                </p>
            </NavLink>
            <NavLink style={{ fontWeight: 'bolder', color: 'white', textDecoration: 'none' }} to="/">
                <p style={{ padding: '2px' }} >&nbsp;&nbsp; Full Stack Software Developer&nbsp;&nbsp;</p>
            </NavLink>
        </div >
    )
}
