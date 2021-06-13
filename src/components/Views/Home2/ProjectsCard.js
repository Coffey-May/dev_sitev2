import React from 'react'



export const ProjectsCard = ({ slide }) => {
    return (



        <div className="project-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '.5em', height: '50vh', borderTop: '2px solid goldenrod', marginBottom: '1.5em' }}>

            <div>
                <header>
                    <h3>{slide.title}</h3>
                </header>
                <div style={{ height: '5em' }}>
                    <img style={{ width: '5em', height: 'auto' }} src={slide.image} alt="image of website" />
                    <img style={{ width: '5em', height: 'auto' }} src={slide.image2} alt="image of website" />
                    <img style={{ width: '5em', height: 'auto' }} src={slide.image3} alt="image of website" />
                </div>

                <p > {slide.description} </p>
            </div>
            <div>
                <p className="animated-word" >
                    <a target="blank" style={{ textDecoration: 'none', color: 'white' }} href={slide.link}>View</a>
                </p>
            </div>
        </div >



    )
}
