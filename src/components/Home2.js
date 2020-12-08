import React from 'react';
import { NavLink } from "react-router-dom";
import '../index.css';
import Parallax from "react-rellax";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaCopyright } from 'react-icons/fa';
import Resume from '/Users/coffeymay/workspace/dev_sitev2/src/PDFS/Gray Simple Minimalist Resume (1).pdf'

export default function Home2() {
    return (
        <Parallax speed={8}>

            <div id="page2" >


                <header style={{ height: '10vh', backgroundColor: 'black  ', color: 'white' }} >

                </header>

                <div id=" main-content2" className="content-wrapper2">
                    <div style={{ height: '2vh' }}>
                    </div>
                    <div style={{
                        marginBottom: '-2vh',
                        textAlign: 'left',
                        padding: '1em',
                        width: '95vw',
                        height: '74vh',
                        margin: '0 auto',
                        background: 'linear-gradient( #1b1b1bd7,#3d3d3dc4,#fcfcfc31)'
                    }}>
                        <h2 style={{ color: 'white', margin: '0 auto', fontWeight: 'bolder', textAlign: 'center', fontSize: '3vh' }}>ABOUT ME</h2>
                        <hr />
                        <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
                            <div>
                                <div style={{ display: 'flex', msFlexDirection: 'row', flexWrap: 'wrap' }}>
                                    <p style={{ fontWeight: '900', color: 'white', fontSize: '2vh', width: '60vw', margin: '0 auto' }}>
                                        &nbsp; &nbsp; &nbsp; &nbsp; Hello! My name is Coffey May.
                                        I am a Full Stack software developer.
                                        This site, built in ReactJS, demonstrates and outlines my stack, abilities, and skills.
                                        My Initial interest in working with data has to do with the nature of visual language.
                                        Initially, as an oil painter, I became interested in the relationship between culture and its represntaion via paint.
                        Similarly, technology is impacting society in similar ways as paintings once did.    </p>
                                    <div className="deezNuts" style={{ width: '8rem', height: '8rem', marginRight: '3vw' }} ></div>
                                </div>
                                {/* <a style={{ paddingLeft: '0', textAlign: 'center', textDecoration: 'none', marginLeft: '23.5vw' }} href={img1} >Download<br />Resume</a> */}
                            </div>
                            <hr />
                            <div>

                                <a styel={{ ZIndex: '99', padding: '3rem' }} className="glow-button button resume-btn bg-transparent"
                                    href={Resume} target="blank"><h4 style={{
                                        // marginBottom: '10vh',
                                        color: 'white', textDecoration: 'none',
                                        fontSize: '2vw',
                                        border: '1px solid white',
                                        padding: '1rem',
                                        margin: '0 auto',
                                        borderRadius: '99rem',
                                        textAlign: 'center',
                                        width: '30vw',
                                        fontWeight: 'bolder'
                                    }}>Download Resume</h4></a>
                                <div style={{ height: '2vh' }}></div>

                                <NavLink to="/projects" className="nav-link">
                                    <h4 style={{
                                        marginLeft: '2vw', fontFamily: 'sans-serif', color: 'white', textDecoration: 'none',
                                        border: '1px solid white',
                                        fontSize: '2vw',
                                        padding: '1rem',
                                        margin: '0 auto',
                                        borderRadius: '99rem',
                                        textAlign: 'center',
                                        width: '30vw'
                                    }} >Projects </h4>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: '2vh' }}>
                    </div>
                </div>

                <footer id="footer2" style={{ border: '1px solid black', height: '12vh', backgroundColor: 'black', color: 'white' }}>
                    <br />
                    <FaCopyright /> COPYRIGHT2020
                <br />
                    <AnchorLink style={{
                        color: 'white', textDecoration: 'none',
                        //  border: '1px solid white',
                        // padding: '.10em',
                        // borderRadius: '99rem',
                        // marginTop: '2rem'
                    }} href='#navId'>
                        Return to top
                    </AnchorLink>


                </footer>
            </div>
        </Parallax >
    )
}
