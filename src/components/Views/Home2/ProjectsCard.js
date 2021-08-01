import React from 'react'



export const ProjectsCard = ({ slide, setPic }) => {
    return (



        <div className="project-card" style={{ zIndex: '99', backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '.5em', height: 'auto', border: '2px solid goldenrod', marginBottom: '1.5em' }}>

            <div>
                <header>
                    <h3>{slide.title}</h3>
                </header>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <img style={{ width: '30% ', height: 'auto', border: '1px solid goldenrod' }} src={slide.image} alt=" website" onMouseOver={() => { setPic(slide.image) }} />
                    <img style={{ width: '30% ', height: 'auto', border: '1px solid goldenrod' }} src={slide.image2} alt=" website" onMouseOver={() => { setPic(slide.image2) }} />
                    <img style={{ width: '30% ', height: 'auto', border: '1px solid goldenrod' }} src={slide.image3} alt="website" onMouseOver={() => { setPic(slide.image3) }} />
                </div>

                <p > {slide.description} </p>
            </div>
            <div>

                <a className="chi animated-word " target="blank" style={{ textDecoration: 'none', color: 'white' }} href={slide.link}> <p className="animated-word chi" >View </p></a>

            </div>
        </div >



    )
}
