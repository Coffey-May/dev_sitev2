import React from 'react'
// import { NavLink } from "react-router-dom";
import Marquee from "react-fast-marquee";

import { FaHtml5, FaCss3, FaJs, FaReact, FaGit, FaNodeJs } from 'react-icons/fa';
import { DiBootstrap, DiDatabase, DiDotnet, DiNpm, DiVisualstudio, DiSass } from 'react-icons/di';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import Home2 from './Home2';


// import HomeSlides from './HomeSlides';
// import Contact from './Contact';
import '../App.css';
import '../index.css'
require('dotenv').config();
console.log(process.env)

// const inline = {
//     border: '1px solid black',
//     height: '100vh'
// }
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;


function fetchData() {

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Nashville&appid=${REACT_APP_API_KEY}`).then(response => {
        return response.json()


    }).then(data => {
        console.log(data)
        const num = (data.main.temp - 273.15) * 1.8000 + 32.00;

        var n = num.toFixed(2);

        document.getElementById('weather_card').innerHTML = `
        <div style ="height:10em; width:8em; border:1px solid white; ">
        <label style="color:white;" for="city-select">Choose City:</label>
        <select style="color:white;background-color: transparent;" name="cars" id="cars">
        <option style="background-color: transparent;" value="London">London</option>
        <option style="background-color: transparent;" value="New York">New York</option>
        <option style="background-color: transparent;" value="Los Angeles">Los Angeles</option>
        <option style="background-color: transparent;" value="Dallas">Dallas</option>
    </select>
    
    <div class="sun2"></div>


    <h4>${data.name}</h4>
                <h6>TN</h6>
               
              

                <h6>${n} °F</h6>
           

                </div>
              
`
    })
}
fetchData()






export default function Home() {
    return (

        <div style={{ height: '80vh' }} id="page1" >


            <div id="main-content-image" className="content-wrapper">
                <main id="main-content" >
                    <div style={{ marginTop: '14vh' }}>

                        <Marquee gradient={false} speed={70} >

                            <FaHtml5 size={50} />HTML5<FaCss3 size={50} />CSS3<FaJs size={50} />JavaScript<br />ES6<FaReact size={50} />ReactJS<FaGit size={50} />Version Control
                            <FaNodeJs size={50} /> Node JS<DiBootstrap style={{ marginTop: '-1.5vh' }} size={70} />Bootstrap<DiDatabase style={{ marginTop: '-1.5vh' }} size={70} />SQL
                            <DiDotnet style={{ marginTop: '-1.5vh' }} size={70} />DOTNET<DiNpm style={{ marginTop: '-1.5vh' }} size={70} />NPM

                            <DiVisualstudio style={{ marginTop: '-1.5vh' }} size={70} />Visual Studio<DiSass style={{ marginTop: '-1.5vh' }} size={70} />Sass

                        </Marquee>

                    </div>




                    <h1>COFFEY  MAY
                    <br />
                        <hr style={{ width: '75vw', margin: '0 auto' }} />
                   SOFTWARE DEVELOPER</h1>

                    <AnchorLink className="text" style={{
                        // marginBottom: '10vh',
                        color: 'white', textDecoration: 'none',
                        border: '1px solid white',
                        padding: '1rem',
                        borderRadius: '99rem'
                    }}
                        href='#page2'>
                        LEARN MORE
                </AnchorLink>

                    <br />
                    <br />
                    <br />
                    <br />


                    <div id="weather_card"  >

                    </div>


                </main>

            </div>


            <footer id="footer" >
                <h1>hey</h1>
            </footer>
            <Home2 />
        </div >
    )

}
