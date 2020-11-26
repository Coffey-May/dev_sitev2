import React from 'react';
import Slider from 'react-animated-slider';
// import './App.css';

import 'react-animated-slider/build/horizontal.css';


const slides = [
    { title: 'Full-Stack', description: 'Software Development' },
    { title: 'Second item', description: 'Lorem ipsum' },
    { title: 'Deez Nutsk', description: 'Software Development' },
    { title: 'Second item', description: 'Lorem ipsum' },
    { title: 'FQuarf', description: 'Software Development' },
    { title: 'Second item', description: 'Lorem ipsum' },
    { title: 'Fark faRK', description: 'Software Development' },
    { title: 'Second item', description: 'Lorem ipsum' }
];

export default function HomeSlides() {
    return (
        <div style={{ height: '10vh' }}>



            <Slider speed={300}>
                {slides.map((slide, index) => <div key={index}>
                    <h2>{slide.title}</h2>
                    <div>{slide.description}</div>
                </div>)}
            </Slider>
        </div>
    )
}
