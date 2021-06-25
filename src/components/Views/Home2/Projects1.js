import React, { Suspense } from 'react';
import { ProjectsCard } from "./ProjectsCard";



import 'react-animated-slider/build/horizontal.css'; import pic1 from '../images/Screen Shot 2020-12-10 at 4.40.52 PM.png';
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



let link1 = '/weather'
let link2 = '/todo'
let link3 = "/recipe"

const slides = [
    { title: 'Weather Search', image: `${pic4}`, image2: `${pic5}`, image3: `${pic6}`, description: 'This feature allows a logged in User the affordances to perform api calls to the national weather service, in order to get up to date weather information based on city and country.', link: `${link1}` },
    { title: 'MERN Stack', image: `${pic10}`, image2: `${pic11}`, image3: `${pic12}`, description: 'This Full stack application was built using NodeJS, and interacts with a MongoDB database.  State is managed Client side via Redux, after authentication via Google OAuth or local sign/signup is completed. This project performs crud opertations on posts made by users sharing travel locales or events. ', link: 'https://coffey-may-coffey-may-merntime.zeet.app/' },
    { title: 'Painting Gallery', image: `${pic1}`, image2: `${pic2}`, image3: `${pic3}`, description: 'This Project was built using ReactJS. It showcases my oil paintings by dynamically populating a list of cards with detail modals. This project also impliments Routing, and Several NPM packages to achieve Parallax effect, and UI composition.', link: 'http://coffeymayart.com/' },
    { title: 'To Do Organizer', image: `${pic7}`, image2: `${pic8}`, image3: `${pic9}`, description: 'This feature presents the user with a to do list application with full CRUD functionailty and use of local storage.', link: `${link2}` },
    { title: 'What Should I Eat?', image: `${pic7}`, image2: `${pic8}`, image3: `${pic9}`, description: 'This project allows a user to consume a REST api containing recipe data, and the ability to search for recipes by keyword. Affordances for linking to original content provided dynamically.', link: `${link3}` }
];

export const Projects1 = () => {
    return (

        <Suspense>


            <div id="projects" style={{ color: "white", borderTop: '5px solid goldenrod', padding: '1em', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} >
                <h2 >Projects</h2>
                <div className="flex-row-between">

                    {slides.map((slide, index) => {
                        return (
                            <ProjectsCard slide={slide} key={index} />


                        )
                    })}

                </div>
            </div>






        </Suspense>

    )
}
