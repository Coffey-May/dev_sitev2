import React from 'react'

const card = {
    width: '20em'
}

export const ProjectsCard = ({ slide }) => {
    return (



        <div style={{ borderTop: '2px solid goldenrod' }}>

            <div style={card}>
                <header>
                    <h3>{slide.title}</h3>
                </header>
                <img style={{ width: '5em', height: 'auto' }} src={slide.image} />
                <img style={{ width: '5em', height: 'auto' }} src={slide.image2} />
                <img style={{ width: '5em', height: 'auto' }} src={slide.image3} />
                <div className="content">
                    <p> {slide.description} </p>
                </div>
                <p className="animated-word">
                    <a target="blank" style={{ textDecoration: 'none', color: 'white' }} href={slide.link}>View</a>
                </p>

            </div>
        </div >



    )
}
