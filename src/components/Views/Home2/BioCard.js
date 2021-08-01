import React, { useState } from 'react';
import { BioCardInfo } from "./BioCardInfo";
import { Projects1 } from "./Projects1";


export const BioCard = () => {
    const [pic, setPic] = useState('')
    return (
        <div >
            <div id=" main-content2" className="content-wrapper2">

                <div style={{ height: '4vh' }}>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                    marginBottom: '-2vh',
                    textAlign: 'left',
                    padding: '1em',
                    width: '95vw',
                    height: 'auto',
                    overflow: 'auto',
                    margin: '0 auto',
                    background: 'linear-gradient( #1b1b1bd7,#3d3d3dc4,#fcfcfc31)'
                }}
                >
                    <BioCardInfo pic={pic} />
                    <Projects1 setPic={setPic} />
                </div>
                <div style={{ height: '2vh' }}>
                </div>
            </div >
        </div>
    )
}
