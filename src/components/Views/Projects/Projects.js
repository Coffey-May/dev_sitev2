import React, { Suspense } from 'react';
import HomeSlides from './HomeSlides';
import { FaCopyright } from 'react-icons/fa';

//Projects Component

export default function Projects() {
    return (
        <>
            <div id="colorBG">
                <div style={{ height: '80vh' }} >
                    <Suspense fallback={<div>Loading...</div>}>
                        <HomeSlides />
                    </Suspense>
                </div>
            </div>
            <footer id="footer2" style={{ border: '1px solid black', height: '10vh', backgroundColor: 'black', color: 'white' }}>
                <br />
                <FaCopyright /> COPYRIGHT{new Date().getFullYear()}
            </footer>
        </>

    )
}
