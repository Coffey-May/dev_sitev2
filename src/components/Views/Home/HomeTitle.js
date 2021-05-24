import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Parallax from "react-rellax";


const HomeTitle = ({ footer }) => {
    return (
        <Parallax speed={3}>
            <div className="flex-row-around container">
                <div style={{ textAlign: 'left' }}>
                    <h1>COFFEY  MAY
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
                                border: '1px solid white',
                                padding: '.5rem',

                            }}
                                href='#page2'>
                                LEARN MORE
            </AnchorLink>
                        </h3>
                        <h3>
                            <AnchorLink className="chi text" style={{
                                color: 'white',
                                textDecoration: 'none',
                                border: '1px solid white',
                                padding: '.5rem',

                            }}
                                href='#page2'>
                                DOWNLOAD RESUME
            </AnchorLink>
                        </h3>
                    </div>
                </div >

                <div id="objective" >
                    <h6>
                        Is your development team looking for an enthusiatic junior developer to help your company grow in todays evolving tech landscape?
                        My name is Coffey May, and I am a full stack ReactJS and C# developer.  I have been coding for two years and am eager to work in
                        an agile environment. This website showcases a portfolio of my projects as well as my resume and contact info. Feel free to explore
                        and I hope you enjoy...
                    </h6>
                    <hr className="animated" />
                    <code style={{ backgroundColor: 'transparent', color: 'white' }}>


                    </code >

                </div>
            </div>
        </Parallax>
    )
}

export default HomeTitle
