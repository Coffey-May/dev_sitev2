import React from 'react';
const h1Style = { color: 'white', margin: '0 auto', fontWeight: 'bolder', textAlign: 'center' }

export const BioCardInfo = () => {
    return (
        <div id="about" style={{ columnCount: '1', border: '7px solid goldenrod', padding: '1em' }}>
            <div className="picOfMe" style={{
                borderRadius: '50%',
                width: '7em',
                height: '7em',
                backgroundColor: '#2badd9',
                float: 'left',
                shapeOutside: 'inset(1% round 50%)',
                padding: '2em',
                margin: '2em'
            }} ></div>
            < h1 style={h1Style} > ABOUT ME</h1>
            <hr />
            <p style={{
                color: '#F7D37A',

            }}>
                &nbsp; &nbsp; &nbsp; &nbsp; As a recent graduate of the Nashville Software School, I am
                eager to apply my training as a Full Stack Software
                Developer. As an entry-level or junior programmer, I hope to
                hone, refine, and expand the skills that I have been
                cultivating in the two years of experience that I have with
                coding. I am also eager to join a team and further develop
                my experience with agile methodologies, larger codebases,
                and emerging technologies.
            </p>
        </div>
    )
}
