import React from 'react';
import '../index.css';
import Parallax from "react-rellax";
import AnchorLink from 'react-anchor-link-smooth-scroll';






export default function Home2() {
    return (
        <Parallax style={{ height: '100vh' }} speed={10}>
            {/* <AnchorLink className="text" style={{
                marginBottom: '10vh',
                color: 'white', textDecoration: 'none',
                border: '1px solid white',
                padding: '1rem',
                borderRadius: '99rem'
            }}
                href='#page2'>
                LEARN MORE
                </AnchorLink> */}
            <div id="page2">


                <header id="header2 page2" style={{ border: '1px solid black', height: '10vh', marginTop: '10vh' }} >
                    <h1>hey</h1>
                </header>

                <div style={{ border: '1px solid black', height: '80vh' }} className="content-wrapper2">


                </div>


                <footer id="footer2" style={{ border: '1px solid black', height: '10vh' }}>

                </footer>
            </div>
        </Parallax >
    )
}
