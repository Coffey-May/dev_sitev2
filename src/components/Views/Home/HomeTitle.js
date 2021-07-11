import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Parallax from "react-rellax";
import Resume from '../../../PDFS/Coffey May Resume.pdf';





const HomeTitle = ({ footer }) => {
    return (
        <Parallax speed={-1}>
            <div className="flex-row-around container">

                <div className="homeTitle" style={{ textAlign: 'left' }}>

                    <h1 style={{ fontSize: '3.5em', marginTop: '85px' }}>COFFEY  MAY
                        <br />
                        <hr style={{ textAlign: 'center', margin: '0 ', width: '70%' }} className="animated title" />

                    </h1 >
                    <h4 className="title" style={{ margin: '0 auto' }} >SOFTWARE DEVELOPER</h4>

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
                        <p>&nbsp;</p>
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
                    <div style={{ borderTop: '5px solid goldenrod', padding: '1.3em', backgroundColor: 'rgba(0, 0, 0, 0.255)' }}>
                        <strong>
                            <h2 style={{ margin: '0 auto ', color: '#white', letterSpacing: '.2em', fontSize: '2em' }}> SOFTWARE SOLUTIONS</h2>
                            <hr style={{ margin: '0 auto' }} />
                            <h4 style={{ color: 'white', textAlign: 'left', fontWeight: 'lighter' }}>
                                Do you like finding elegant and simple solutions for real time challenges? Is your development team looking for an enthusiatic junior developer to help your company grow in todays evolving tech landscape?
                                I am a junior software developer looking to join an agile team to develop clean and reliable code.
                            </h4>
                        </strong>

                    </div>
                </div>


            </div>




        </Parallax >
    )
}

export default HomeTitle
