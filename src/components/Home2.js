import React from 'react';
import '../index.css';
import Parallax from "react-rellax";
import AnchorLink from 'react-anchor-link-smooth-scroll';






export default function Home2() {
    return (
        <Parallax speed={10}>

            <div id="page2">


                <header style={{ border: '1px solid black', height: '10vh' }} >
                    <h1>hey</h1>
                </header>

                <div style={{ border: '1px solid black', height: '80vh' }} className="content-wrapper2">

                </div>

                <footer id="footer2" style={{ border: '1px solid black', height: '10vh' }}>

                <AnchorLink className="text" style={{
                        // marginBottom: '10vh',
                        color: 'black', textDecoration: 'none',
                      
                    }}
                        href='#page1'>
                        Return to top
                            
                </AnchorLink>

                </footer>
            </div>
        </Parallax >
    )
}
