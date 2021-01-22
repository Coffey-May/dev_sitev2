import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

//Projects Slider and controls

import Pic from './Screen Shot 2020-12-10 at 4.40.52 PM.png'
import Pic2 from './Screen Shot 2020-12-10 at 4.41.07 PM.png'
import Pic3 from './Screen Shot 2020-12-10 at 4.41.27 PM.png'

const imgStyle = { border: '13px solid white', height: '18em', width: '30em', margin: '1em' }
let link1 = '/weather'
let link2 = '/todo'
let pic1 = Pic
let pic2 = Pic2
let pic3 = Pic3

const slides = [
    { title: 'Painting Gallery', image: `${pic1}`, image2: `${pic2}`, image3: `${pic3}`, description: 'This Project was built using ReactJS. It showcases my oil paintings by dynamically populating a list of cards with detail modals.  This project also impliments NodeJS, Routing, and Several NPM packages to achieve Parallax effect, and UI composition.', link: 'http://coffeymayart.com/' },
    { title: 'Weather Search', image: `${pic1}`, image2: `${pic1}`, image3: `${pic1}`, description: 'This feature allows a logged in User the affordances to perform api calls to the national weather service, in order to get up to date weather information', link: `${link1}` },
    { title: 'To Do Organizer', image: `${pic1}`, image2: `${pic1}`, image3: `${pic1}`, description: 'This feature presents the user with a to do list application with add, edit, read,s and delete affordances.', link: `${link2}` }

];
export default function HomeSlides() {
    return (
        <div id="colorBG" style={{ height: '80vh', width: '100vw', margin: '0 auto' }}>
            <Slider speed={1500}>
                {slides.map((slide, index) => <div style={{ overflow: 'scroll', height: '80vh', color: 'white', padding: '2em' }} key={index}>
                    <h2 style={{ marginTop: '0vh' }}>{slide.title}</h2>
                    <img id="project-pic" style={imgStyle} src={slide.image} alt="image of art website" />
                    <img id="project-pic" style={imgStyle} src={slide.image2} alt="image of art website" />
                    <img id="project-pic" style={imgStyle} src={slide.image3} alt="image of art website" />
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
