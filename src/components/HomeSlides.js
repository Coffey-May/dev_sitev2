import React from 'react';
import Slider from 'react-animated-slider';
import WeatherComponent from "./WeatherComponent"
import { NavLink } from "react-router-dom";
import 'react-animated-slider/build/horizontal.css';
import { Link } from "react-router-dom";

import Pic from './Screen Shot 2020-12-10 at 4.40.52 PM.png'
import Pic2 from './Screen Shot 2020-12-10 at 4.41.07 PM.png'
import Pic3 from './Screen Shot 2020-12-10 at 4.41.27 PM.png'



let link1 = '/weather'

let pic1 = Pic
let pic2 = Pic2
let pic3 = Pic3



const slides = [
    { title: 'Painting Gallery', image: `${pic1}`, image2: `${pic2}`, image3: `${pic3}`, description: 'This Project was built using ReactJS. It showcases my oil paintings by dynamically populating a list of cards with detail modals.  This project also impliments NodeJS, Routing, and Several NPM packages to achieve Parallax effect, and UI composition.', link: 'http://coffeymayart.com/' },
    { title: 'Weather Search', image: `${pic1}`, image2: `${pic1}`, image3: `${pic1}`, description: 'This feature allows a logged in User the affordances to perform api calls to the national weather service, in order to get up to date weather information', link: `${link1}` },
    { title: 'Comment secton', image: `${pic1}`, image2: `${pic1}`, image3: `${pic1}`, description: 'This feature allows a logged in User the affordances to perform full CRUD operations on a social media style comment thread ', link: `${link1}` }

];

export default function HomeSlides() {

    return (
        <div id="colorBG" style={{ height: '80vh', width: '100vw', margin: '0 auto' }}>

            {/* <WeatherComponent /> */}
            {/* <h1>Hello</h1> */}
            {/* <img style={{ height: '4em', width: '4em' }} src={pic1} alt="" /> */}

            <Slider speed={1500}>
                {slides.map((slide, index) => <div style={{ overflow: 'scroll', height: '80vh', color: 'white', padding: '2em' }} key={index}>

                    <h2 style={{ marginTop: '0vh' }}>{slide.title}</h2>

                    <img id="project-pic" style={{ border: '13px solid white', height: '18em', width: '30em', margin: '1em' }} src={slide.image} alt="image of art website" />
                    <img id="project-pic" style={{ border: '13px solid white', height: '18em', width: '30em', margin: '1em' }} src={slide.image2} alt="image of art website" />
                    <img id="project-pic" style={{ border: '13px solid white', height: '18em', width: '30em', margin: '1em' }} src={slide.image3} alt="image of art website" />
                    <div style={{ width: '65vw', margin: '0 auto' }}>
                        <h3>{slide.description}</h3>
                    </div>


                    <h3>
                        <button>
                            <a target="blank" style={{ color: 'black', height: '20px' }} href={slide.link}>View</a>
                        </button>
                    </h3>





                </div>)}
            </Slider>
        </div>
    )
}
