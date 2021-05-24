import React, { Suspense } from 'react';
import Home2 from '../Home2/Home2';
import { Spring } from "react-spring/renderprops";
import { useAuth } from "../../../AuthContext";
import HomeMarquis from "./HomeMarquis";
import HomeTitle from "./HomeTitle";



//Home Page Component

export default function Home() {
    const { currentUser } = useAuth();
    var footerMessage = ''
    if (currentUser === null) {
        footerMessage = <h4 className="text">Welcome, please log in for access to more features.</h4>
    } else if (currentUser != null) {
        footerMessage = <><h4 className="text">Welcome, {currentUser.name} | {currentUser.email}</h4>

        </>
    }
    return (
        <div style={{ height: '80vh' }} id="page1" >


            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ delay: 100, duration: 1000 }}
            >
                {props => (
                    <div style={props}>
                        <div id="main-content-image" className="content-wrapper">
                            <main id="main-content" >
                                <Suspense fallback={<div>Loading...</div>}>
                                    <HomeMarquis />
                                    <HomeTitle footer={footerMessage} />

                                </Suspense>

                            </main>


                        </div>

                    </div>

                )}
            </Spring>

            <footer className="container" id="footer" style={{ justifyContent: 'left' }}>

            </footer>
            <Home2 />
        </div >
    )

}
