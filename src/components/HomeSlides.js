import React from 'react';
import Slider from 'react-animated-slider';

// import './App.css';

import 'react-animated-slider/build/horizontal.css';


const slides = [
    { title: 'Painting Gallery', image: '', description: 'This Project was built using ReactJS. It showcases my oil paintings by dynamically populating a list of cards with detail modals.  This project also impliments NodeJS, Routing, and Several NPM packages to achieve Parallax effect, and UI composition.', link: 'http://coffeymayart.com/' },
    { title: 'Second item', image: '', description: 'Lorem ipsum', link: '' }
    // { title: 'Deez Nutsk', description: 'Software Development' },
    // { title: 'Second item', description: 'Lorem ipsum' },
    // { title: 'FQuarf', description: 'Software Development' },
    // { title: 'Second item', description: 'Lorem ipsum' },
    // { title: 'Fark faRK', description: 'Software Development' },
    // { title: 'Second item', description: 'Lorem ipsum' }
];

export default function HomeSlides() {
    return (
        <div style={{ height: '80vh', width: '80vw', margin: '0 auto' }}>



            <Slider speed={300}>
                {slides.map((slide, index) => <div key={index}>
                    <h2 style={{ marginTop: '10vh' }}>{slide.title}</h2>
                    <div>{slide.image}</div>
                    <div>{slide.description}</div>
                    <h4> <a style={{ height: '20px' }} href={slide.link}>coffeymayart.com</a> </h4>
                </div>)}
            </Slider>
        </div>
    )
}
