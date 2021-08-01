import React, { Suspense } from 'react';
import { ProjectsCard } from "./ProjectsCard";
import { pics } from '../Home2/Pics'

let link1 = '/weather'
let link2 = '/todo'
let link3 = "/recipe"
let link4 = "/bp"

const slides = [
    { title: 'Blood Pressure Tracker', image: `${pics.pic13}`, image2: `${pics.pic14}`, image3: `${pics.pic15}`, description: 'This application allows a user to keep a day by day record of their blood pressure and heart rate readings populated into a chart.', link: `${link4}` },
    { title: 'Weather Search', image: `${pics.pic4}`, image2: `${pics.pic5}`, image3: `${pics.pic6}`, description: 'This feature allows a logged in User the affordances to perform api calls to the national weather service, in order to get up to date weather information based on city and country.', link: `${link1}` },
    { title: 'MERN Stack', image: `${pics.pic10}`, image2: `${pics.pic11}`, image3: `${pics.pic12}`, description: 'This Full stack application was built using NodeJS, and interacts with a MongoDB database.  State is managed Client side via Redux, after authentication via Google OAuth or local sign/signup is completed. This project performs crud opertations on posts made by users sharing travel locales or events. ', link: 'https://coffey-may-coffey-may-merntime.zeet.app/' },
    { title: 'Painting Gallery', image: `${pics.pic1}`, image2: `${pics.pic2}`, image3: `${pics.pic3}`, description: 'This Project was built using ReactJS. It showcases my oil paintings by dynamically populating a list of cards with detail modals. This project also impliments Routing, and Several NPM packages to achieve Parallax effect, and UI composition.', link: 'http://coffeymayart.com/' },
    { title: 'To Do Organizer', image: `${pics.pic7}`, image2: `${pics.pic8}`, image3: `${pics.pic9}`, description: 'This feature presents the user with a to do list application with full CRUD functionailty and use of local storage.', link: `${link2}` },
    { title: 'What Should I Eat?', image: `${pics.pic16}`, image2: `${pics.pic17}`, image3: `${pics.pic18}`, description: 'This project allows a user to consume a REST api containing recipe data, and the ability to search for recipes by keyword. Affordances for linking to original content provided dynamically.', link: `${link3}` }
];

export const Projects1 = ({ setPic }) => {
    return (

        <Suspense>


            <div id="projects" style={{ color: "white", borderTop: '5px solid goldenrod', padding: '1em', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} >
                <h2 >Projects</h2>
                <div className="flex-row-between">

                    {slides.map((slide, index) => {
                        return (
                            <ProjectsCard setPic={setPic} slide={slide} key={index} />


                        )
                    })}

                </div>
            </div>






        </Suspense>

    )
}
