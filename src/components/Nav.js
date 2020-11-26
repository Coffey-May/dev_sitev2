import React from 'react';
import { NavLink } from "react-router-dom";


import '../App.css';




function Nav() {
    return (

        <nav className="Nav" id="Nav">

            <ul style={{ listStyle: 'none', marginTop: '3vh', justifyContent: 'space-between' }}>
                <div style={{ width: '90vw', display: "flex", flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div style={{ display: "flex", flexDirection: 'row' }}>
                        <li> <h5 style={{ fontFamily: 'sans-serif', border: '2px solid white', padding: '2px' }} >CM </h5></li>
                        <li><h5 style={{ marginTop: '.25vh', fontFamily: 'sans-serif', padding: '2px' }}> Full Stack Software Developer</h5></li>
                    </div>
                    <div style={{ display: "flex", flexDirection: 'row', width: '20vw', justifyContent: 'space-between' }}>

                        <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }} className="nav-link" >
                            {/* <li className="nav-link"></li> */}
                            <li> <h5 style={{ fontFamily: 'sans-serif', padding: '2px' }} >Home </h5></li>
                        </NavLink>

                        <NavLink to="/contact" style={{ textDecoration: 'none', color: 'white' }} className="nav-link">
                            <li> <h5 style={{ fontFamily: 'sans-serif', padding: '2px' }} >Contact </h5></li>

                        </NavLink>

                    </div>
                </div>

            </ul>

        </nav >
    );
}

export default Nav;