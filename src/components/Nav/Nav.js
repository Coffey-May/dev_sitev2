import React from 'react';
import { NavLink } from "react-router-dom";
import { useAuth } from "../../AuthContext"
import Dashboard from '../Auth/Dashboard';

//Navigation Component

const authStyle = { paddingTop: '2px', marginLeft: '2vw', textDecoration: 'none', color: 'white' }
const liStyle = { color: 'white', fontWeight: 'bolder' }
const li2Style = { marginLeft: '2vw', fontFamily: 'sans-serif', padding: '2px', fontWeight: 'bolder' }
const navLinkStyle = { textDecoration: 'none', color: 'white' }

const Nav = () => {
    const { currentUser } = useAuth()
    if (currentUser === null) {
        var link = <>
            <NavLink to="/login" style={authStyle} className="chi nav-link">
                <li style={liStyle} href="#"><span className="glyphicon glyphicon-log-in"></span> Login</li>
            </NavLink>
            <NavLink to="/signup" style={authStyle} className="chi nav-link">
                <li style={liStyle}><span className="glyphicon glyphicon-user"></span> Sign Up</li>
            </NavLink>
        </>
    } else if (currentUser != null) {
        link = <Dashboard />
    }
    return (


        <nav id="navTop" className="Nav navbar navbar-inverse" style={{
            margin: '0', borderRadius: '0', position: 'relative', backgroundColor: 'black',
            zIndex: '10000'
        }} >
            <div style={{ color: 'white', height: '10vh' }} >
                <div className="navbar-header">
                    <button style={{ marginTop: '2.5vh' }} type="button" className="chi navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span style={{ color: 'white' }} className="chi icon-bar"></span>
                        <span style={{ color: 'white' }} className="chi icon-bar"></span>
                        <span style={{ color: 'white' }} className="chi icon-bar"></span>
                    </button>

                    <div className="chi" style={{ paddingLeft: '2vw', marginTop: '2.5vh', display: "flex", flexDirection: 'row' }}>
                        <p style={{ fontFamily: 'sans-serif', border: '2px solid white', padding: '2px' }} ><NavLink style={{ color: 'white', textDecoration: 'none', fontWeight: 'bolder' }} to="/">CM </NavLink></p>
                        <p style={{ fontFamily: 'sans-serif', padding: '2px' }} ><NavLink style={{ fontWeight: 'bolder', color: 'white', textDecoration: 'none' }} to="/"> &nbsp;&nbsp; Full Stack Software Developer&nbsp;&nbsp;</NavLink></p>
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav" style={{ fontSize: '1.5vw', marginTop: '2.5vh', width: '60vw', listStyle: 'none', justifyContent: 'flex-end' }}>
                        <NavLink to="/" style={navLinkStyle} className="chi nav-link" >
                            <li className="active" style={li2Style} ><span className="glyphicon glyphicon-home"></span> Home</li>
                        </NavLink>
                        <NavLink to="/projects" style={navLinkStyle} className="chi nav-link">
                            <li style={li2Style}>Projects </li>
                        </NavLink>
                        <NavLink to="/contact" style={navLinkStyle} className=" chi nav-link">
                            <li style={li2Style} >Contact </li>
                        </NavLink>
                        {link}

                    </ul>
                </div>
            </div>
        </nav >


    );
}

export default Nav;