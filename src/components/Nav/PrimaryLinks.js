import React from 'react';
import { LoginOptions } from "./LoginOptions";
import { FaGithub, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const PrimaryLinks = () => {
    return (
        <div className="flex-row-between">
            <a className="chi" rel="noreferrer" target="_blank" href="mailto: jcoffeymay6@gmail.com"><li className="contact-li "><FaEnvelope size={18} /></li></a>
            <a className="chi" rel="noreferrer" target="_blank" href="https://github.com/Coffey-May"><li className=" contact-li"><FaGithub size={18} /></li></a>
            <a className="chi" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/jonathan-coffey-may/"> <li className="contact-li"><FaLinkedin size={18} /></li></a>
            <a className="chi" rel="noreferrer" target="_blank" href="https://www.instagram.com/coffeymay1/"><li className="contact-li"><FaInstagram size={18} /></li></a>
            <LoginOptions />
        </div>
    )
}

