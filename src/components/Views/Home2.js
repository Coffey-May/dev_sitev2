import React from 'react';
import { NavLink } from "react-router-dom";
import Parallax from "react-rellax";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaCopyright } from 'react-icons/fa';
import Resume from '/Users/coffeymay/workspace/dev_sitev2/src/PDFS/Resume2021.pdf';

//Home Page 2 Component

const h2Style = { color: 'white', margin: '0 auto', fontSize: '2em', fontWeight: 'bolder', textAlign: 'center', padding: '3px' }

export default function Home2() {
    return (
        <Parallax speed={8}>
            <div id="page2" >
                <header style={{ height: '10vh', backgroundColor: 'black  ', color: 'white' }} >
                </header>
                <div id=" main-content2" className="content-wrapper2">
                    <div style={{ height: '4vh' }}>
                    </div>
                    <div style={{
                        marginBottom: '-2vh',
                        textAlign: 'left',
                        padding: '1em',
                        width: '95vw',
                        height: '74vh',
                        overflow: 'scroll',
                        margin: '0 auto',
                        background: 'linear-gradient( #1b1b1bd7,#3d3d3dc4,#fcfcfc31)'
                    }}>
                        <h2 style={h2Style}>ABOUT ME</h2>
                        <hr style={{ margin: '10px' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
                            <div>
                                <div style={{ display: 'flex', msFlexDirection: 'row', flexWrap: 'wrap' }}>
                                    <p style={{ fontWeight: '900', color: 'white', fontSize: '2vh', width: '55vw', margin: '0 auto' }}>
                                        &nbsp; &nbsp; &nbsp; &nbsp; As a recent graduate of the Nashville Software School, I am
                                        eager to apply my training as a Full Stack Software
                                        Developer. As an entry-level or junior programmer, I hope to
                                        hone, refine, and expand the skills that I have been
                                        cultivating in the two years of experience that I have with
                                        coding. I am also eager to join a team and further develop
                                        my experience with agile methodologies, larger codebases,
                                        and emerging technologies.
                                    </p>
                                    <div className="picOfMe" style={{ position: 'relative', width: '10rem', height: '10rem', marginRight: '3vw' }} ></div>
                                </div>
                            </div>
                            <hr style={{ margin: '10px' }} />
                            <div>
                                <a className=" chi" style={{ ZIndex: '99' }}
                                    href={Resume} target="blank"><h4 className=" chi" style={{

                                        color: 'white', textDecoration: 'none',
                                        fontSize: '2vw',
                                        border: '1px solid white',
                                        padding: '1rem',
                                        margin: '0 auto',
                                        borderRadius: '99rem',
                                        textAlign: 'center',
                                        width: '30vw',
                                        fontWeight: 'bolder'
                                    }}>Download Resume</h4></a><br />

                                <NavLink to="/projects" className=" chi nav-link">
                                    <h4 className=" chi"
                                        style={{
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
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div style={{ height: '2vh' }}>
                    </div>
                </div>
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
