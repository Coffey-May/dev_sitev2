import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const HomeTitle = ({ footer }) => {
    return (
        <div className="flex-row-around container">
            <div style={{ textAlign: 'left', lineHeight: '3em' }}>
                <h1>COFFEY  MAY
                <br />
                    <hr style={{ width: '50%', margin: '0 ' }} className="animated" />

                </h1 >
                <h4 className="title" style={{ margin: '0 auto' }} >FULL STACK SOFTWARE DEVELOPER</h4>
                <br />
                <div className="flex-row-between">
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
                    <h3>
                        <AnchorLink className="chi text" style={{
                            color: 'white',
                            textDecoration: 'none',
                            border: '1px solid white',
                            padding: '1rem',
                            fontWeight: '900',
                        }}
                            href='#page2'>
                            DOWNLOAD RESUME
            </AnchorLink>
                    </h3>
                </div>
            </div >
            <div style={{ marginTop: '12.5vh', marginLeft: '5em', border: '1px solid white' }}>

                {footer}
            </div>
        </div>
    )
}

export default HomeTitle
