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
                <footer id="footer2" style={{ border: 'none', height: '10vh', backgroundColor: 'rgba(20,20,20)', color: 'white' }}>
                    <h4>
                        <br />
                        <FaCopyright /> COPYRIGHT{new Date().getFullYear()}
                        <br />

                        <AnchorLink className="chi" style={{
                            color: 'white', textDecoration: 'none',
                        }} href='#navTop'>
                            Return to top
                    </AnchorLink>
                    </h4>
                </footer>
            </div>
        </Parallax >
    )
}
