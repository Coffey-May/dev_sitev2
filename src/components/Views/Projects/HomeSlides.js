import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import pic1 from '../images/Screen Shot 2020-12-10 at 4.40.52 PM.png';
import pic2 from '../images/Screen Shot 2020-12-10 at 4.41.07 PM.png';
import pic3 from '../images/Screen Shot 2020-12-10 at 4.41.27 PM.png';
import pic4 from '../images/Screen Shot 2021-02-04 at 1.09.57 PM.png';
import pic5 from '../images/Screen Shot 2021-02-04 at 2.49.43 PM.png';
import pic6 from '../images/Screen Shot 2021-02-04 at 12.52.31 PM.png';
import pic7 from '../images/Screen Shot 2021-02-06 at 11.02.49 AM.png';
import pic8 from '../images/Screen Shot 2021-02-06 at 11.09.04 AM.png';
import pic9 from '../images/Screen Shot 2021-02-06 at 11.04.17 AM.png';
import pic10 from '../images/Screen Shot 2021-03-11 at 11.52.58 AM.png';
import pic11 from '../images/Screen Shot 2021-03-11 at 11.53.18 AM.png';
import pic12 from '../images/Screen Shot 2021-03-11 at 11.53.32 AM.png';

//Projects Slider and controls

const imgStyle = { backgroundImage: 'contain', border: '1px solid black', height: 'auto', width: '32em', margin: '1rem', boxShadow: ' 5px 10px 18px #0b0e29' }
let link1 = '/weather'
let link2 = '/todo'

const slides = [
    { title: 'Weather Search', image: `${pic4}`, image2: `${pic5}`, image3: `${pic6}`, description: 'This feature allows a logged in User the affordances to perform api calls to the national weather service, in order to get up to date weather information based on city and country.', link: `${link1}` },
    { title: 'MERN Stack', image: `${pic10}`, image2: `${pic11}`, image3: `${pic12}`, description: 'This Full stack application was built using NodeJS, and interacts with a MongoDB database.  State is managed Client side via Redux, after authentication via Google OAuth or local sign/signup is completed. This project performs crud opertations on posts made by users sharing travel locales or events. ', link: 'https://coffey-may-coffey-may-merntime.zeet.app/' },
    { title: 'Painting Gallery', image: `${pic1}`, image2: `${pic2}`, image3: `${pic3}`, description: 'This Project was built using ReactJS. It showcases my oil paintings by dynamically populating a list of cards with detail modals. This project also impliments Routing, and Several NPM packages to achieve Parallax effect, and UI composition.', link: 'http://coffeymayart.com/' },
    { title: 'To Do Organizer', image: `${pic7}`, image2: `${pic8}`, image3: `${pic9}`, description: 'This feature presents the user with a to do list application with full CRUD functionailty and use of local storage.', link: `${link2}` }
];
export default function HomeSlides() {
    return (

        <div id="colorBG" style={{ height: '80vh', width: '100vw', margin: '0 auto' }}>
            <Slider speed={1500} touchDisabled={true}>
                {slides.map((slide, index) => <div style={{ overflow: 'scroll', height: '80vh', color: 'white', padding: '2em' }} key={index}>
                    <h2 style={{ marginTop: '0vh' }}>{slide.title}</h2>
                    <img id="project-pic" style={imgStyle} src={slide.image} alt="screenshot of computer application" />
                    <img id="project-pic" style={imgStyle} src={slide.image2} alt="screenshot of computer application" />
                    <img id="project-pic" style={imgStyle} src={slide.image3} alt="screenshot of computer application" />
                    <div style={{ width: '68vw', margin: '0 auto' }}>
                        <h3 style={{ fontSize: '3vh' }}>{slide.description}</h3>
                    </div>
                    <h6 className="btncontainer">
                        <p className="animated-word">
                            <a target="blank" style={{ textDecoration: 'none', color: 'black', height: '20px', marginTop: '3em' }} href={slide.link}>View</a>
                        </p>
                    </h6>
                </div>
                )}
            </Slider>
        </div >

    )
}


