import React from 'react';
import { BioCardInfo } from "./BioCardInfo";
import { ProjectsCard } from "./ProjectsCard";

export const BioCard = () => {
    return (
        <div >
            <div id=" main-content2" className="content-wrapper2">
                <div style={{ height: '4vh' }}>
                </div>
                <div className="flex-row-between"
                    style={{
                        marginBottom: '-2vh',
                        textAlign: 'left',
                        padding: '1em',
                        width: '95vw',
                        height: '74vh',
                        overflow: 'scroll',
                        margin: '0 auto',
                        background: 'linear-gradient( #1b1b1bd7,#3d3d3dc4,#fcfcfc31)'
                    }}
                >
                    <div>
                        <BioCardInfo />
                    </div>
                    <div>
                        <ProjectsCard />
                    </div>

                </div>
                <div style={{ height: '2vh' }}>
                </div>
            </div >
        </div>
    )
}
