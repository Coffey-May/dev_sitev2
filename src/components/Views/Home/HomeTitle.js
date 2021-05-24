import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Parallax from "react-rellax";
import Resume from '../../../PDFS/Coffey May Resume.pdf';


const HomeTitle = ({ footer }) => {
    return (
        <Parallax speed={-1}>
            <div className="flex-row-around container">
                <div style={{ textAlign: 'left' }}>
                    <h1>COFFEY MAY
                <br />
                        <hr style={{ textAlign: 'center', width: '50%', margin: '0 ' }} className="animated title" />

                    </h1 >
                    <h4 className="title" style={{ margin: '0 auto' }} >FULL STACK SOFTWARE DEVELOPER</h4>
                    <br />
                    {footer}
                    <div className="flex-row-between">
                        <h3>
                            <AnchorLink className="chi text" style={{
                                color: 'white',
                                textDecoration: 'none',
                                border: '1px solid goldenrod',
                                padding: '.5rem',

                            }}
                                href='#page2'>
                                LEARN MORE
            </AnchorLink>
                        </h3>
                        <h3>
                            <a className="chi text" style={{
                                color: 'white',
                                textDecoration: 'none',
                                border: '1px solid goldenrod',
                                padding: '.5rem',
                            }}
                                href={Resume} target="blank">
                                DOWNLOAD RESUME
                            </a>
                        </h3>
                    </div>
                </div >


                <div id="objective"  >
                    <div style={{ border: '9px solid goldenrod', padding: '1em', backgroundColor: 'rgba(0, 0, 0, 0.455)' }}>
                        <strong>
                            <h1 style={{ margin: '0 auto ', color: '#F7D37A', letterSpacing: '.2em', fontSize: '2em' }}>What I do</h1>
                            <hr style={{ color: 'goldenrod', margin: '0 auto' }} />
                            <h5 style={{ color: '#F7D37A' }}>
                                Do you like finding elegant and simple solutions for real time challanges? Is your development team looking for an enthusiatic junior developer to help your company grow in todays evolving tech landscape?
                                My name is Coffey May, and I am a full stack ReactJS and C# developer.I have been coding for two years and am eager to work in
                                an agile environment. This website showcases a portfolio of my projects as well as my resume and contact info.Feel free to explore
                                and I hope you enjoy...
                    </h5>
                        </strong>
                    </div><div >

                        <div style={{ color: '#F7D37A', marginTop: '2vh', border: '2px solid goldenrod', padding: '1em', backgroundColor: 'rgba(0, 0, 0, 0.155)' }}>
                            <em>
                                <p style={{ lineHeight: '3em', fontWeight: 'bolder', margin: '0 auto', color: 'whitesmoke', fontWeight: 'lighter', fontSize: 'xx-small', lineHeight: '8px' }}>"Mathematical science shows what is. It is the language of unseen relations between things.
                 But to use and apply that language, we must be able fully to appreciate, to feel, to seize the unseen, the unconscious."</p>
                            </em>
                            <br />
                            <p style={{ color: '#FBE9C1', margin: '0 auto', fontSize: 'xx-small' }}> <a target="blank" href="https://en.wikipedia.org/wiki/Ada_Lovelace">~Ada Lovelace~</a> </p>
                        </div>
                    </div>

                    {/* <hr className="animated" /> */}


                </div>
            </div>
        </Parallax >
    )
}

export default HomeTitle
