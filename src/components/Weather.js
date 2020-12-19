import React from "react";
import { AuthProvider } from "../contexts/AuthContext";
import Pic from './weathergif.gif'
import Pic2 from './Screen Shot 2020-12-10 at 4.41.07 PM.png'
import Pic3 from './Screen Shot 2020-12-10 at 4.41.27 PM.png'
var image;
function imageFilter(x) {
    console.log(x)
    if (x === 'scattered clouds') {

        image = Pic
        console.log("beep")
    }
    //  else if (!x === "light rain") {
    //     console.log("boop")
}

const Weather = props => (


    <div style={{ display: "flex", FlexDirection: 'row', flexWrap: 'wrap', overflow: '  scroll' }} className="weather__info">
        <div style={{ margin: '2em' }}>
            <h2 style={{ margin: '0 auto' }}>Currently</h2>
            <hr />
            {
                props.city && props.country &&
                <h2 style={{ margin: '0 auto' }} className="weather__key"> Location:
	 		<span className="weather__value"> {props.city}, {props.country}</span>
                </h2>
            }
            {
                props.temperature && <h3 style={{ margin: '0 auto' }} className="weather__key"> Temperature:
	 		<span className="weather__value"> {props.temperature} °F	</span>
                </h3>
            }

            {
                props.humidity && <h3 style={{ margin: '0 auto' }} className="weather__key"> Humidity:
	 		<span className="weather__value"> {props.humidity}% </span>
                </h3>
            }

            {

                props.description && <h2 style={{ margin: '0 auto' }} className="weather__key"> Conditions:
	 		<span className="weather__value"> {props.description} </span>
                </h2>
            }
        </div>

        <div>
            {

                <div className="sun-2-container">
                    <img
                        // className="weather-pic"
                        style={{ padding: '2em', margin: '.5em', width: '40vw' }} src={image} alt="" />
                    {/* <div className="sun2"></div> */}
                </div>
            }
            {imageFilter(props.description)}
        </div>

        {
            props.error && <p className="weather__error">{props.error}</p>
        }
    </div>
);

export default Weather;