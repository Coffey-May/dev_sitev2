import React from 'react';
import { Burger } from './Burger';
// import { LoginOptions } from './LoginOptions';
import { LogoHomeLink } from './LogoHomeLink';
import { PrimaryLinks } from './PrimaryLinks';



const navstyle = {
    margin: '0 auto', borderRadius: '0', position: 'relative', backgroundColor: 'rgba(20,20,20)', zIndex: '10000',
    height: '10vh', border: 'none'
}
const Nav = () => {
    return (
        <nav id="navTop" className="navbar navbar-inverse  flex-row-between container" style={navstyle} >
            <div style={{ width: '100vw', marginTop: '2.5%', fontWeight: '900' }} className="flex-row-between ">

                <div>

                    <LogoHomeLink />

                </div>

                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <PrimaryLinks />

                    </ul>
                </div>

                <Burger />
            </div>

        </nav >


    );
}

export default Nav;