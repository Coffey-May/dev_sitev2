import React from "react";

import { FaFacebook, FaGithub, FaEnvelope, FaInstagram, FaLinkedin, FaCopyright } from 'react-icons/fa';
import './App.css';



function Contact() {
    return (


        <div className="Contact">

            <div style={{ height: '90vh', color: `#fff`, margin: 0, backgroundColor: 'black', opacity: '0.90', justifyContent: 'center' }}>
                <h1 style={{ margin: 0 }}>Contact</h1>
                <hr />
                <h2 style={{
                    letterSpacing: '.1rem',
                    height: '75vh',
                    fontWeight: 'lighter', padding: '1rem', margin: '0 auto', width: '70vw', textAlign: 'center'
                }}>If you would like more information regarding purchasing or commissioning of paintings or software development, contact me at the e-mail link below.
         Also follow me on social media for more painting and software development related content. </h2>


                <div style={{ height: '10vh', marginBottom: '0' }}>
                    <hr />
                    <ol style={{ listStyle: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', color: `#fff`, backgroundColor: 'black', opacity: '0.8' }}>
                        <a rel="noreferrer" target="_blank" href="mailto: jcoffeymay6@gmail.com"><li className="contact-li "><FaEnvelope size={25} /></li></a>
                        <a rel="noreferrer" target="_blank" href="https://github.com/Coffey-May"><li className=" contact-li"><FaGithub size={25} /></li></a>
                        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/jonathan-coffey-may/"> <li className="contact-li"><FaLinkedin size={25} /></li></a>
                        <a rel="noreferrer" target="_blank" href="https://www.instagram.com/coffeymay1/"><li className="contact-li"><FaInstagram size={25} /></li></a>
                        <a rel="noreferrer" target="_blank" href="https://m.facebook.com/coffey.may.7"><li className="contact-li"><FaFacebook size={25} /></li></a>
                    </ol>
                    <p ><FaCopyright /> COPYRIGHT2020</p>
                </div>
            </div>
        </div >

    );
}

export default Contact;