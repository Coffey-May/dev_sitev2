import React from 'react';
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"
import '../App.css';
import Dashboard from '../Dashboard';
import { Navbar } from 'react-bootstrap';







const Nav = () => {
    const { currentUser } = useAuth()
    if (currentUser === null) {
        var link = <>
            <NavLink to="/login" style={{ textDecoration: 'none', color: 'white' }} className="nav-link">
                {/* <li class="glyphicon glyphicon-log-in" style={{ fontFamily: 'sans-serif', padding: '2px' }} >Login </li> */}
                <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
            </NavLink>


            <NavLink to="/signup" style={{ textDecoration: 'none', color: 'white' }} className="nav-link">
                <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
            </NavLink>
        </>

    } else if (currentUser != null) {
        link = <Dashboard />

    }



    return (


        <nav id="page1" className="Nav navbar navbar-inverse" id="Nav" style={{ margin: '0', borderRadius: '0' }} >
            <div style={{ color: 'white' }} class="container-fluid">
                <div class="navbar-header">
                    <button style={{ marginTop: '2.5vh' }} type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span style={{ color: 'white' }} class="icon-bar"></span>
                        <span style={{ color: 'white' }} class="icon-bar"></span>
                        <span style={{ color: 'white' }} class="icon-bar"></span>
                    </button>

                    <div style={{ paddingLeft: '2vw', marginTop: '2.5vh', display: "flex", flexDirection: 'row' }}>
                        <p style={{ fontFamily: 'sans-serif', border: '2px solid white', padding: '2px' }} >CM </p>
                        <p style={{ marginTop: '.25vh', fontFamily: 'sans-serif', padding: '2px' }}> &nbsp;&nbsp; Full Stack Software Developer</p>
                    </div>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav" style={{ marginTop: '2.5vh', width: '60vw', listStyle: 'none', justifyContent: 'space-between' }}>
                        {/* <div style={{ display: "flex", flexDirection: 'row', width: '35vw', justifyContent: 'space-between' }}> */}
                        <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }} className="nav-link" >

                            <li class="active" style={{ fontFamily: 'sans-serif', padding: '2px' }} >Home </li>
                        </NavLink>
                        <NavLink to="/projects" style={{ textDecoration: 'none', color: 'white' }} className="nav-link">
                            <li style={{ fontFamily: 'sans-serif', padding: '2px' }} >Projects </li>
                        </NavLink>
                        <NavLink to="/contact" style={{ textDecoration: 'none', color: 'white' }} className="nav-link">
                            <li style={{ fontFamily: 'sans-serif', padding: '2px' }} >Contact </li>
                        </NavLink>
                        {link}
                        {/* </div> */}
                    </ul>
                </div>
            </div>
        </nav >


    );
}

export default Nav;