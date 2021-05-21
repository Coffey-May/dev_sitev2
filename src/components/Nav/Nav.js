import React from 'react';
import { Burger } from './Burger';
import { LoginOptions } from './LoginOptions';
import { LogoHomeLink } from './LogoHomeLink';
import { PrimaryLinks } from './PrimaryLinks';



const navstyle = {
    margin: '0', borderRadius: '0', position: 'relative', backgroundColor: 'black', color: 'white', zIndex: '10000'
}
const Nav = () => {
    return (
        <nav id="navTop" className="navbar navbar-inverse  flex-row-between" style={navstyle} >
            <div className="flex-row-between">
                <div >

                    <LogoHomeLink />
                    {/* <Burger /> */}
                </div>
                <Burger />
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <PrimaryLinks />

                    </ul>
                </div>

            </div>

        </nav >


    );
}

export default Nav;