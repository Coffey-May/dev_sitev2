import React from 'react';
import Marquee from "react-fast-marquee";
import { FaHtml5, FaCss3, FaJs, FaReact, FaGit, FaNodeJs } from 'react-icons/fa';
import { DiBootstrap, DiDatabase, DiDotnet, DiNpm, DiVisualstudio, DiSass } from 'react-icons/di';
import cSharp from '../Home/HomeImages/csharpBE.png'

const HomeMarquis = () => {
    return (

        <div style={{ marginTop: '14vh', fontFamily: 'Poiret One, cursive' }}>
            <Marquee className="marquee" style={{ fontWeight: 'bolder', fontSize: '1.35em', position: 'relative' }} gradient={false} speed={30} >
                <FaHtml5 size={50} /><p> &nbsp;•HTML5•&nbsp;</p>
                <FaCss3 size={50} /><p>&nbsp;•CSS3•&nbsp;</p>
                <FaJs size={50} /><p>&nbsp;•JavaScript•&nbsp;<br />ES6</p>
                <FaReact size={50} />&nbsp;<p>&nbsp;•ReactJS•&nbsp;</p>&nbsp;
                <FaGit size={50} /><p>•Version• Control</p>
                <FaNodeJs size={50} /><p>&nbsp;•Node• JS&nbsp;</p>
                <DiBootstrap style={{ marginTop: '-1.5vh' }} size={70} /><p>&nbsp;•Bootstrap•&nbsp;</p>
                <DiDatabase style={{ marginTop: '-1.5vh' }} size={70} /><p>&nbsp;•SQL•&nbsp;</p>
                <DiDotnet style={{ marginTop: '-1.5vh' }} size={70} />&nbsp;<p>•DOTNET•</p>&nbsp;&nbsp;
                <DiNpm style={{ marginTop: '-1.5vh' }} size={70} />&nbsp;<p>&nbsp;•NPM•&nbsp;</p>
                <DiVisualstudio style={{ marginTop: '-1.5vh' }} size={70} /><p>&nbsp;•Visual•&nbsp;<br />&nbsp;Studio</p>&nbsp;&nbsp;
                <DiSass style={{ marginTop: '-1.5vh' }} size={70} /><p>&nbsp;•Sass•&nbsp;</p>
                <img style={{ height: '6rem', marginTop: '-1.5vh' }} src={cSharp} alt="c sharp logo" /><p>•CSharp•&nbsp;</p>
            </Marquee>
        </div>

    )
}
export default HomeMarquis
