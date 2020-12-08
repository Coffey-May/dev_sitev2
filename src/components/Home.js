import React from 'react'
import Marquee from "react-fast-marquee";
import { FaHtml5, FaCss3, FaJs, FaReact, FaGit, FaNodeJs } from 'react-icons/fa';
import { DiBootstrap, DiDatabase, DiDotnet, DiNpm, DiVisualstudio, DiSass } from 'react-icons/di';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Home2 from './Home2';
// import WeatherAPI from "./WeatherAPI";
import WeatherComponent from "./WeatherComponent";
import { Spring } from "react-spring/renderprops";
import { useAuth } from "../contexts/AuthContext"
// import HomeSlides from './HomeSlides';
// import Contact from './Contact';
import '../App.css';
import '../index.css'
require('dotenv').config();

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

export default function Home() {
    const { currentUser } = useAuth();

    var footerMessage = ''
    if (currentUser === null) {
        footerMessage = <h4>Welcome, log in for access to more features</h4>
    } else if (currentUser != null) {
        footerMessage = <h4>Welcome, {currentUser.email} </h4>
    }
    return (




        <div style={{ height: '80vh' }} id="page1" >


            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ delay: 100, duration: 1000 }}
            >
                {props => (
                    <div style={props}>

                        <div id="main-content-image" className="content-wrapper">
                            <main id="main-content" >
                                <div style={{ marginTop: '14vh' }}>

                                    <Marquee style={{ fontWeight: 'bolder', fontSize: '1.35em' }} gradient={false} speed={100} >

                                        <FaHtml5 size={50} /><p> &nbsp;•HTML5•&nbsp;</p><FaCss3 size={50} /><p>&nbsp;•CSS3•&nbsp;</p><FaJs size={50} /><p>&nbsp;•JavaScript•&nbsp;<br />ES6</p><FaReact size={50} /><p>&nbsp;•ReactJS•&nbsp;</p><FaGit size={50} /><p>•Version• Control</p>
                                        <FaNodeJs size={50} /><p>&nbsp;•Node• JS&nbsp;</p><DiBootstrap style={{ marginTop: '-1.5vh' }} size={70} /><p>&nbsp;•Bootstrap•&nbsp;</p><DiDatabase style={{ marginTop: '-1.5vh' }} size={70} /><p>&nbsp;•SQL•&nbsp;</p>
                                        <DiDotnet style={{ marginTop: '-1.5vh' }} size={70} /><p>&nbsp;•DOTNET•&nbsp;</p><DiNpm style={{ marginTop: '-1.5vh' }} size={70} /><p>&nbsp;•NPM•&nbsp;</p>

                                        <DiVisualstudio style={{ marginTop: '-1.5vh' }} size={70} /><p>&nbsp;•Visual•&nbsp;<br />&nbsp;Studio</p><DiSass style={{ marginTop: '-1.5vh' }} size={70} /><p>&nbsp;•Sass•&nbsp;</p>

                                    </Marquee>

                                </div>




                                <h1>COFFEY  MAY
                    <br />
                                    <hr style={{ width: '85vw', margin: '0 auto' }} className="animated" />
                   SOFTWARE DEVELOPER</h1>

                                <AnchorLink className="text" style={{
                                    // marginBottom: '10vh',
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
                    </div>
                )}
            </Spring>

            <footer id="footer" >
                {footerMessage}
            </footer>
            <Home2 />
        </div >
    )

}
