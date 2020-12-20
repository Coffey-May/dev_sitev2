import React from 'react';
import HomeSlides from './components/HomeSlides';
import { FaCopyright } from 'react-icons/fa';

export default function Projects() {
    return (
        <>
            <div id="colorBG">
                <div style={{ height: '80vh' }} >


                    {/* <h1>Hello</h1> */}
                    <HomeSlides />
                </div>
            </div>
            <footer id="footer2" style={{ border: '1px solid black', height: '10vh', backgroundColor: 'black', color: 'white' }}>


                <br />
                <FaCopyright /> COPYRIGHT{new Date().getFullYear()}
            </footer>
        </>

    )
}
