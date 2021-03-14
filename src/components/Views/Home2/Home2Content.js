import React from 'react';
import { NavLink } from "react-router-dom";
import Resume from '../../../PDFS/Resume2021.pdf';


const h2Style = { color: 'white', margin: '0 auto', fontSize: '2em', fontWeight: 'bolder', textAlign: 'center', padding: '3px' }
const Home2Content = () => {
    return (
        <div>
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
                            <div style={{ overflow: 'scroll', height: '60vh', display: 'flex', msFlexDirection: 'row', flexWrap: 'wrap', margin: '0 auto', width: '80vw', justifyContent: 'space-between' }}>

                                <p style={{ paddingLeft: '2em', fontWeight: '900', color: 'white', fontSize: '4vh', }}>
                                    &nbsp; &nbsp; &nbsp; &nbsp; As a recent graduate of the Nashville Software School, I am
                                    eager to apply my training as a Full Stack Software
                                    Developer. As an entry-level or junior programmer, I hope to
                                    hone, refine, and expand the skills that I have been
                                    cultivating in the two years of experience that I have with
                                    coding. I am also eager to join a team and further develop
                                    my experience with agile methodologies, larger codebases,
                                    and emerging technologies.
                                    </p>
                                <div className="picOfMe" style={{ position: 'relative', width: '10em', height: '10em' }} ></div>

                                <div style={{ margin: '0 auto' }} >
                                    <a className=" chi" style={{ ZIndex: '99' }}
                                        href={Resume} target="blank">
                                        <h4 style={{
                                            color: 'white',
                                            textDecoration: 'none',
                                            fontSize: '2vw',
                                            border: '1px solid white',
                                            padding: '1rem',
                                            margin: '0 auto',
                                            borderRadius: '99rem',
                                            textAlign: 'center',
                                            width: '30vw',
                                            fontWeight: 'bolder'
                                        }}>Download Resume</h4></a><br />

                                    <NavLink className=" chi" to="/projects" >
                                        <h4
                                            style={{
                                                color: 'white',
                                                textDecoration: 'none',
                                                border: '1px solid white',
                                                fontSize: '2vw',
                                                padding: '1rem',
                                                margin: '0 auto',
                                                borderRadius: '99rem',
                                                textAlign: 'center',
                                                width: '30vw',
                                                fontWeight: 'bolder'
                                            }} >Projects </h4>
                                    </NavLink>
                                </div>
                            </div>
                            <hr style={{ margin: '10px' }} />
                        </div>
                    </div>
                </div>
                <div style={{ height: '2vh' }}>
                </div>
            </div >
        </div >
    )
}

export default Home2Content
