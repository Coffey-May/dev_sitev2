import React from 'react'
import { NavLink } from "react-router-dom";
import Marquee from "react-fast-marquee";

import { FaHtml5, FaCss3, FaJs, FaReact, FaGit, FaNodeJs } from 'react-icons/fa';
import { DiBootstrap, DiDatabase, DiDotnet, DiNpm, DiVisualstudio, DiSass } from 'react-icons/di';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import Home2 from './Home2';

// import HomeSlides from './HomeSlides';
// import Contact from './Contact';
import '../App.css';
import '../index.css'


// const inline = {
//     border: '1px solid black',
//     height: '100vh'
// }

export default function Home() {
    return (
        <div style={{ height: '80vh' }} >


            <div id="main-content-image" className="content-wrapper">
                <main id="main-content" >
                    <div style={{ marginTop: '14vh' }}>

                        <Marquee gradient={false} speed={70} >

                            <FaHtml5 size={50} />HTML5<FaCss3 size={50} />CSS3<FaJs size={50} />JavaScript<br />ES6<FaReact size={50} />ReactJS<FaGit size={50} />Version Control
                            <FaNodeJs size={50} /> Node JS<DiBootstrap style={{ marginTop: '-1.5vh' }} size={70} />Bootstrap<DiDatabase style={{ marginTop: '-1.5vh' }} size={70} />SQL
                            <DiDotnet style={{ marginTop: '-1.5vh' }} size={70} />DOTNET<DiNpm style={{ marginTop: '-1.5vh' }} size={70} />NPM

                            <DiVisualstudio style={{ marginTop: '-1.5vh' }} size={70} />Visual Studio<DiSass style={{ marginTop: '-1.5vh' }} size={70} />Sass

                        </Marquee>

                    </div>

                    {/* <HomeSlides /> */}


                    <h1>COFFEY  MAY
                    <br />
                        <hr style={{ width: '75vw', margin: '0 auto' }} />
                   SOFTWARE DEVELOPER</h1>

                    <AnchorLink className="text" style={{
                        marginBottom: '10vh',
                        color: 'white', textDecoration: 'none',
                        border: '1px solid white',
                        padding: '1rem',
                        borderRadius: '99rem'
                    }}
                        href='#page2'>
                        LEARN MORE
                </AnchorLink>
                </main>

            </div>


            <footer id="footer" >
                <h1>hey</h1>
            </footer>
            <Home2 />
        </div>

    )
}
