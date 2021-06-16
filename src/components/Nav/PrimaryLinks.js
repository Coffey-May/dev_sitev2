import React from 'react';
import { LoginOptions } from "./LoginOptions"
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const PrimaryLinks = () => {
    return (
        <div className="flex-row-between">




            <AnchorLink id="projLink" style={{
                color: 'white', textDecoration: 'none'
            }} href='#home2'>

            </AnchorLink>

            <LoginOptions />

        </div>
    )
}

