import React from 'react'



export const ProjectsCard = ({ slide }) => {
    return (



        <div className="project-card" style={{ zIndex: '99', backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '.5em', height: 'auto', border: '2px solid goldenrod', marginBottom: '1.5em' }}>

            <div>
                <header>
                    <h3>{slide.title}</h3>
                </header>
                <div style={{ height: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <img style={{ border: '1px solid goldenrod' }} src={slide.image} alt=" website" />
                    <img style={{ border: '1px solid goldenrod' }} src={slide.image2} alt=" website" />
                    <img style={{ border: '1px solid goldenrod' }} src={slide.image3} alt="website" />
                </div>

                <p > {slide.description} </p>
            </div>
            <div>

                <a className="chi animated-word " target="blank" style={{ textDecoration: 'none', color: 'white' }} href={slide.link}> <p className="animated-word chi" >View </p></a>

            </div>
        </div >



    )
}
