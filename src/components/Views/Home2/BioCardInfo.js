import React from 'react';
const h1Style = { display: 'inline-block', color: 'white', margin: '0 auto', fontWeight: 'bolder', textAlign: 'center' }

export const BioCardInfo = () => {
    return (
        <div id="about" className="flex-row-between" style={{ border: '1px solid goldenrod', padding: '1em' }}>
            <div className="picOfMe" style={{ position: 'relative', width: '10em', height: '10em' }} ></div>
            <h1 style={h1Style}>ABOUT ME</h1>
            <hr style={{ margin: '10px' }} />

            <p style={{ paddingLeft: '2em', color: 'white' }}>
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
