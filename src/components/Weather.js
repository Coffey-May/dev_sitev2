import React from "react";
import Pic from './cloudygif.gif'
import Pic2 from './Screen Shot 2020-12-10 at 4.41.07 PM.png'
import Pic3 from './Screen Shot 2020-12-10 at 4.41.27 PM.png'


const Weather = props => (
    <div className="weather__info">
        {
            props.city && props.country && <h2 className="weather__key"> Location:
	 		<span className="weather__value"> {props.city}, {props.country}</span>
            </h2>
        }
        {
            props.temperature && <h3 className="weather__key"> Temperature:
	 		<span className="weather__value"> {props.temperature} °F	</span>
            </h3>
        }

        {
            props.humidity && <h3 className="weather__key"> Humidity:
	 		<span className="weather__value"> {props.humidity}% </span>
            </h3>
        }
        {
            <div className="sun-2-container">
                {/* <img src={Pic} alt="" /> */}
                <div className="sun2"></div>
            </div>
        }
        {
            props.description && <h2 className="weather__key"> Conditions:
	 		<span className="weather__value"> {props.description} </span>
            </h2>
        }

        {
            props.error && <p className="weather__error">{props.error}</p>
        }
    </div>
);

export default Weather;