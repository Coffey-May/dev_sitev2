import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const HomeTitle = () => {
    return (
        <div>
            <h1>COFFEY  MAY
                                    <br />
                <hr style={{ width: '85vw', margin: '0 auto' }} className="animated" />
                                    SOFTWARE ENGINEER</h1>
            <AnchorLink className="chi text" style={{
                color: 'white', textDecoration: 'none',
                border: '1px solid white',
                padding: '1rem',
                borderRadius: '99rem'
            }}
                href='#page2'>
                LEARN MORE
                                </AnchorLink>

        </div>
    )
}

export default HomeTitle