import React from 'react';
import Parallax from "react-rellax";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaCopyright } from 'react-icons/fa';
import Home2Content from "./Home2Content";

//Home Page 2 Component

export default function Home2() {
    return (
        <Parallax speed={8}>
            <div id="page2" >
                <Home2Content />
                <footer id="footer2" style={{ border: '1px solid black', height: '12vh', backgroundColor: 'black', color: 'white' }}>
                    <br />
                    <FaCopyright /> COPYRIGHT{new Date().getFullYear()}
                    <br />
                    <AnchorLink className="chi" style={{
                        color: 'white', textDecoration: 'none',
                    }} href='#navTop'>
                        Return to top
                    </AnchorLink>
                </footer>
            </div>
        </Parallax >
    )
}
