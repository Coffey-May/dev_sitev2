import React from 'react';

import { BioCard } from './BioCard';



const Home2Content = () => {
    return (
        <div >
            <header style={{ height: '10vh', backgroundColor: 'rgba(20,20,20) ', color: 'white' }} >
            </header>
            <div className="circle" style={{ bottom: '13.5vh', position: 'absolute', width: '220px', height: '220px' }}>
                <div className="circle__inner">  </div>
            </div >
            <BioCard />
            <div className="circle" style={{ bottom: '38.5vh', left: '80vw', position: 'absolute', width: '420px', height: '420px' }}>

            </div >
        </div >

    )
}

export default Home2Content
