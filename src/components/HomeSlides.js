import React from 'react';
import Slider from 'react-animated-slider';
import WeatherComponent from "./WeatherComponent"
import { NavLink } from "react-router-dom";
import 'react-animated-slider/build/horizontal.css';

import Pic from './IMG_20201206_153507.jpg'




let pic1 = Pic
let link1 = '${<NavLink to={/chat}>Enter Chat App</NavLink >}'




const slides = [
    { title: 'Painting Gallery', image: `${pic1}`, description: 'This Project was built using ReactJS. It showcases my oil paintings by dynamically populating a list of cards with detail modals.  This project also impliments NodeJS, Routing, and Several NPM packages to achieve Parallax effect, and UI composition.', link: 'http://coffeymayart.com/' },
    { title: 'Comment secton', image: `${pic1}`, description: 'This feature allows a logged in User the affordances to perform full CRUD operations on a social media style comment thread ', link: `${link1}` },
    { title: 'Comment secton', image: `${pic1}`, description: 'This feature allows a logged in User the affordances to perform full CRUD operations on a social media style comment thread ', link: `${link1}` }

];

export default function HomeSlides() {
    return (
        <div id="colorBG" style={{ height: '80vh', width: '100vw', margin: '0 auto' }}>

            {/* <WeatherComponent /> */}
            {/* <h1>Hello</h1> */}
            {/* <img style={{ height: '4em', width: '4em' }} src={pic1} alt="" /> */}

            <Slider speed={1500}>
                {slides.map((slide, index) => <div style={{ height: '80vh', color: 'white', padding: '2em' }} key={index}>

                    <h2 style={{ marginTop: '10vh' }}>{slide.title}</h2>
                    <img style={{ height: '10em', width: '10em', backgroundSize: 'cover' }} src={slide.image} alt="" />
                    {/* <div>{slide.image}</div> */}
                    <div style={{ width: '65vw', margin: '0 auto' }}> <h3>{slide.description}</h3> </div>
                    <h3>
                        <button>
                            <a style={{ color: 'black', height: '20px' }} href={slide.link}>View</a>
                        </button>
                    </h3>





                </div>)}
            </Slider>
        </div>
    )
}
