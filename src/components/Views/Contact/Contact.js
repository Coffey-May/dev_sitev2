import React from "react";
import { FaGithub, FaEnvelope, FaInstagram, FaLinkedin, FaCopyright } from 'react-icons/fa';
import '../../../App.css';
import '../../../index.css'



function Contact() {
    return (

        <>
            <div className="Contact">
                <div>

                    <div style={{ overflow: 'scroll', height: '80vh', color: `#fff`, margin: '0', backgroundColor: 'black', opacity: '0.7', justifyContent: 'center' }}>
                        <h2 style={{ fontFamily: 'Poiret One, cursive', color: 'white', margin: '0 auto', paddingTop: '2vh', fontSize: '4em' }}>Contact</h2>
                        <hr />
                        <h2 style={{ fontWeight: '900', color: 'white', fontSize: '4vh', width: '70vw', margin: '0 auto' }}>
                            If you would like more information regarding my work, contact me at the e-mail link below.
                            Feel free to follow me on GitHub and leave a star if you like my work. Follow me on LinkedIn for more info and to stay up to date with my tech related content.
                           Thanks for visiting, come back soon... </h2>

                    </div>

                </div >
            </div>
            <footer id="footer2" style={{ border: '1px solid black', height: '10vh', backgroundColor: 'black', color: 'white' }}>
                <ol style={{ listStyle: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', color: `#fff`, backgroundColor: 'black', opacity: '0.8', marginBottom: '0', marginTop: '2vh' }}>
                    <a className="chi" rel="noreferrer" target="_blank" href="mailto: jcoffeymay6@gmail.com"><li className="contact-li "><FaEnvelope size={25} /></li></a>
                    <a className="chi" rel="noreferrer" target="_blank" href="https://github.com/Coffey-May"><li className=" contact-li"><FaGithub size={25} /></li></a>
                    <a className="chi" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/jonathan-coffey-may/"> <li className="contact-li"><FaLinkedin size={25} /></li></a>
                    <a className="chi" rel="noreferrer" target="_blank" href="https://www.instagram.com/coffeymay1/"><li className="contact-li"><FaInstagram size={25} /></li></a>

                </ol>
                <FaCopyright /> COPYRIGHT{new Date().getFullYear()}
            </footer>
        </>


    );
}

export default Contact;