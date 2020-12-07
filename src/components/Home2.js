import React from 'react';
import '../index.css';
import Parallax from "react-rellax";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaCopyright } from 'react-icons/fa';




const img1 = 'src/components/Gray Simple Minimalist Resume (1).pdf'


export default function Home2() {
    return (
        <Parallax speed={8}>

            <div id="page2" >


                <header style={{ border: '1px solid black', height: '10vh', backgroundColor: 'black  ', color: 'white' }} >

                </header>

                <div id=" main-content2" style={{ border: '1px solid black', height: '80vh' }} className="content-wrapper2">
                    <h3 style={{ margin: '0 auto' }}>ABOUT ME</h3>
                    <div style={{ textAlign: 'left', border: '1px solid black', padding: '1em', width: '95vw', height: '74vh', margin: '0 auto', backgroundColor: 'rgba(0,0,0,0.6)' }}>
                        <p style={{ fontWeight: '900', color: 'white', fontSize: '1.35em', width: '70vw', margin: '0 auto' }}>
                            &nbsp; &nbsp; &nbsp; &nbsp; Hello! My name is Coffey May.
                            I am a Full Stack software developer.
                            This site, built in ReactJS, demonstrates and outlines my stack, abilities, and skills.
                            My Initial interest in working with data has to do with the nature of visual language.
                            Initially, as an oil painter, I became interested in the relationship between culture and its represntaion via paint.
                        Similarly, technology is impacting society in similar ways as paintings once did.    </p>
                        {/* <a style={{ paddingLeft: '0', textAlign: 'center', textDecoration: 'none', marginLeft: '23.5vw' }} href={img1} >Download<br />Resume</a> */}


                    </div>


                </div>

                <footer id="footer2" style={{ border: '1px solid black', height: '12vh', backgroundColor: 'black', color: 'white' }}>
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
