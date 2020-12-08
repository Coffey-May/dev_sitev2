import React from 'react';
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"
import '../App.css';
import Dashboard from '../Dashboard';








const Nav = () => {
    const { currentUser } = useAuth()
    if (currentUser === null) {
        var link = <>
            <NavLink to="/login" style={{ paddingTop: '2px', marginLeft: '2vw', textDecoration: 'none', color: 'white' }} className="chi nav-link">

                <li style={{ color: 'white', fontWeight: 'bolder' }} href="#"><span className="glyphicon glyphicon-log-in"></span> Login</li>
            </NavLink>

            <NavLink to="/signup" style={{ paddingTop: '2px', marginLeft: '2vw', textDecoration: 'none', color: 'white' }} className="chi nav-link">
                <li style={{ color: 'white', fontWeight: 'bolder' }}><span className="glyphicon glyphicon-user"></span> Sign Up</li>
            </NavLink>
        </>
    } else if (currentUser != null) {
        link = <Dashboard />
    }
    return (


        <nav id="page1" className="Nav navbar navbar-inverse" id="navId" style={{
            margin: '0', borderRadius: '0', position: 'relative',
            zIndex: '10000'
        }} >
            <div style={{ color: 'white' }} className="container-fluid">
                <div className="navbar-header">
                    <button style={{ marginTop: '2.5vh' }} type="button" className="chi navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span style={{ color: 'white' }} className="icon-bar"></span>
                        <span style={{ color: 'white' }} className="icon-bar"></span>
                        <span style={{ color: 'white' }} className="icon-bar"></span>
                    </button>

                    <div className="chi" style={{ paddingLeft: '2vw', marginTop: '2.5vh', display: "flex", flexDirection: 'row' }}>

                        <p style={{ fontFamily: 'sans-serif', border: '2px solid white', padding: '2px' }} ><NavLink style={{ fontWeight: 'bolder', color: 'white', textDecoration: 'none', fontWeight: 'bolder' }} to="/">CM </NavLink></p>
                        <p style={{ fontFamily: 'sans-serif', padding: '2px' }} ><NavLink style={{ fontWeight: 'bolder', color: 'white', textDecoration: 'none', fontWeight: 'bolder' }} to="/"> &nbsp;&nbsp; Full Stack Software Developer&nbsp;&nbsp;</NavLink></p>
                        {/* <p style={{ marginTop: '.25vh', fontFamily: 'sans-serif', padding: '2px' }}> &nbsp;&nbsp; Full Stack Software Developer&nbsp;&nbsp;    </p> */}
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav" style={{ marginTop: '2.5vh', width: '60vw', listStyle: 'none', justifyContent: 'flex-end' }}>
                        {/* <div style={{ display: "flex", flexDirection: 'row', width: '35vw', justifyContent: 'space-between' }}> */}
                        <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }} className="chi nav-link" >

                            <li className="active" style={{ color: 'white', marginLeft: '2vw', fontFamily: 'sans-serif', padding: '2px', fontWeight: 'bolder' }} ><span className="glyphicon glyphicon-home"></span> Home</li>
                            {/* <li class="active" style={{color: 'white', marginLeft: '2vw', fontFamily: 'sans-serif', padding: '2px' }} >Home </li> */}
                        </NavLink>
                        <NavLink to="/projects" style={{ textDecoration: 'none', color: 'white' }} className="chi nav-link">
                            <li style={{ marginLeft: '2vw', fontFamily: 'sans-serif', padding: '2px' }} >Projects </li>
                        </NavLink>
                        <NavLink to="/contact" style={{ textDecoration: 'none', color: 'white' }} className=" chi nav-link">
                            <li style={{ marginLeft: '2vw', fontFamily: 'sans-serif', padding: '2px' }} >Contact </li>
                        </NavLink>
                        {link}

                    </ul>
                </div>
            </div>
        </nav >


    );
}

export default Nav;