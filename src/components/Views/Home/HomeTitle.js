import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const HomeTitle = () => {
    return (

        <div className="container " style={{ paddingLeft: '1vw', textAlign: 'left', lineHeight: '3em' }}>
            <h1>COFFEY  MAY
                <br />
                <hr style={{ width: '50%', margin: '0 ' }} className="animated" />

            </h1 >
            <h4 className="title" style={{ margin: '0 auto' }} >FULL STACK SOFTWARE DEVELOPER</h4>
            <br />
            <h3>
                <AnchorLink className="chi text" style={{
                    color: 'white',
                    textDecoration: 'none',
                    border: '1px solid white',
                    padding: '1rem',
                    fontWeight: '900',
                }}
                    href='#page2'>
                    LEARN MORE
            </AnchorLink>
            </h3>

        </div >

    )
}

export default HomeTitle
