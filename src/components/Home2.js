import React from 'react';
import '../index.css';
import Parallax from "react-rellax";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaCopyright } from 'react-icons/fa';







export default function Home2() {
    return (
        <Parallax speed={10}>

            <div id="page2" >


                <header style={{ border: '1px solid black', height: '10vh', backgroundColor: 'black  ', color: 'white' }} >

                </header>

                <div id=" main-content2" style={{ border: '1px solid black', height: '80vh' }} className="content-wrapper2">
                    <h3>ABOUT ME</h3>
                    <div style={{ border: '1px solid black', padding: '1em', width: '70vw', height: '65vh', margin: '0 auto', backgroundColor: 'rgba(255,255,255,0.5)' }}>
                        <p style={{ fontSize: '4vw' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugiat quas exercitationem explicabo architecto eligendi sint, ex omnis dolor est mollitia numquam atque id odio dicta eos illum aliquid accusamus pariatur nostrum! Maiores non voluptas at alias doloremque nulla, asperiores nesciunt dicta doloribus rem, neque sint obcaecati repudiandae. Repellat, quibusdam?</p>


                    </div>

                    <AnchorLink className="text" style={{
                        color: 'black', textDecoration: 'none', border: '1px solid black',
                        padding: '1rem',
                        borderRadius: '99rem'
                    }} href='#page1'>
                        Return to top
                    </AnchorLink>
                </div>

                <footer id="footer2" style={{ border: '1px solid black', height: '10vh', backgroundColor: 'black', color: 'white' }}>


                    <br />
                    <FaCopyright /> COPYRIGHT2020
                </footer>
            </div>
        </Parallax >
    )
}
