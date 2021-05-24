import React from 'react';
import { NavLink } from "react-router-dom";



const h1Style = { color: 'white', margin: '0 auto', fontWeight: 'bolder', textAlign: 'center', padding: '3px' }
const Home2Content = () => {
    return (
        <div>
            <header style={{ height: '10vh', backgroundColor: 'black  ', color: 'white' }} >
            </header>
            <div id=" main-content2" className="content-wrapper2">
                <div style={{ height: '4vh' }}>
                </div>
                <div
                    style={{
                        marginBottom: '-2vh',
                        textAlign: 'left',
                        padding: '1em',
                        width: '95vw',
                        height: '74vh',
                        overflow: 'scroll',
                        margin: '0 auto',
                        background: 'linear-gradient( #1b1b1bd7,#3d3d3dc4,#fcfcfc31)'
                    }}
                >

                    <h1 style={h1Style}>ABOUT ME</h1>
                    <hr style={{ margin: '10px' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
                        <div>
                            <div style={{ height: '60vh', display: 'flex', msFlexDirection: 'row', flexWrap: 'wrap', margin: '0 auto', width: '80vw', justifyContent: 'space-between' }}>

                                <p className="home2" style={{ paddingLeft: '2em', fontWeight: '500', color: 'white', fontSize: '3.25vh', }}>
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


                                    <NavLink className=" chi" to="/projects" >
                                        <h4
                                            style={{
                                                color: 'white',
                                                textDecoration: 'none',
                                                border: '1px solid white',
                                                fontSize: '2vw',
                                                padding: '1rem',
                                                margin: '0 auto',
                                                // borderRadius: '99rem',
                                                textAlign: 'center',
                                                width: '30vw',
                                                fontWeight: 'bolder'
                                            }} >Projects </h4>
                                    </NavLink>

                                </div>

                            </div>

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
