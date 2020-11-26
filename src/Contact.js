import React from "react";

import { FaFacebook, FaGithub, FaEnvelope, FaInstagram, FaLinkedin, FaCopyright } from 'react-icons/fa';
import './App.css';

const image3 = "/images/Screenshot_20201029_233112.jpg"

function Contact() {
    return (


        <div className="Contact">
            {/* 
            <Parallax bgImage={image3} > */}
            <div style={{ height: '100vh', color: `#fff`, margin: 0, backgroundColor: 'black', opacity: '0.8' }}>
                <h1 style={{ margin: 0 }}>Contact</h1>
                <hr />
                <div style={{ height: '65vh', justifyContent: 'center' }}>
                    <h2 style={{
                        letterSpacing: '.1rem',
                        fontWeight: 'lighter', padding: '1rem', margin: '0 auto', width: '70vw', textAlign: 'center'
                    }}>If you would like more information regarding purchasing or commissioning of paintings or software development, contact me at the e-mail link below.
         Also follow me on social media for more painting and software development related content. </h2>
                </div>

                <ul style={{ marginLeft: '1rem', fontWeight: 'lighter', fontSize: '.5rem', display: 'flex', color: `#fff`, backgroundColor: 'black', opacity: '0.8' }}>

                    <li style={{ marginLeft: '-3rem' }} >E-MAIL</li>
                    <li style={{ marginLeft: '-3rem' }} >GITHUB</li>
                    <li style={{ marginLeft: '-3rem' }} >LINKEDIN</li>
                    <li style={{ marginLeft: '-3rem' }} >INSTAGRAM</li>
                    <li style={{ marginLeft: '-3rem' }} >FACEBOOK</li>

                </ul>
                <hr />



                <footer style={{ height: '25vh', marginBottom: '0' }}>
                    <ul style={{ display: 'flex', color: `#fff`, backgroundColor: 'black', opacity: '0.8' }}>
                        <a rel="noreferrer" target="_blank" href="mailto: jcoffeymay6@gmail.com"><li style={{ marginLeft: '-3rem' }} className="contact-li "><FaEnvelope size={50} /></li></a>
                        <a rel="noreferrer" target="_blank" href="https://github.com/Coffey-May"><li style={{ marginLeft: '-3rem' }} className=" contact-li"><FaGithub size={50} /></li></a>
                        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/jonathan-coffey-may/"> <li style={{ marginLeft: '-3rem' }} className="contact-li"><FaLinkedin size={50} /></li></a>
                        <a rel="noreferrer" target="_blank" href="https://www.instagram.com/coffeymay1/"><li style={{ marginLeft: '-3rem' }} className="contact-li"><FaInstagram size={50} /></li></a>
                        <a rel="noreferrer" target="_blank" href="https://m.facebook.com/coffey.may.7"><li style={{ marginLeft: '-3rem' }} className="contact-li"><FaFacebook size={50} /></li></a>

                    </ul>
                    <p ><FaCopyright /> COPYRIGHT2020</p>


                </footer>

            </div>



        </div >

    );
}

export default Contact;