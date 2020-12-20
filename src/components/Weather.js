import React from "react";
import { AuthProvider } from "../contexts/AuthContext";
import Pic from './weathergif.gif'
import Pic2 from './cloudygif.gif'
import Pic3 from './raingif.gif'
import Pic4 from './snowgif.gif'
import Pic5 from './foggif.gif'
var image;
function imageFilter(x) {
    // console.log(x)
    if (x === "light rain" || x === "moderate rain" || x === "heavy intensity rain" || x === "very heavy rain" || x === "extreme rain" || x === "light intensity shower rain" || x === "freezing rain" || x === "shower rain" || x === "heavy intensity shower rain" || x === "	ragged shower rain" || x === "light intensity drizzle") {
        image = Pic3
    }
    else if (x === "clear sky") {
        image = Pic
    }
    else if (x === 'scattered clouds' || x === 'overcast clouds' || x === 'broken clouds' || x === 'few clouds') {
        image = Pic2
    }
    else if (x === "light snow" || x === "Snow" || x === "heavy snow" || x === "Sleet" || x === "Light shower sleet" || x === "Shower sleet" || x === "Light rain and snow" || x === "Rain and snow" || x === "Light shower snow" || x === "Shower snow" || x === "Heavy shower snow") {
        image = Pic4
    }
    else if (x === "mist" || x === "Smoke" || x === "Haze" || x === "fog" || x === "dust" || x === "volcanic ash" || x === "squalls" || x === "tornado" || x === "	sand/ dust whirls" || x === "sand") {
        image = Pic5
    }

}

const Weather = props => (


    <div style={{ fontSize: '1vh', display: "flex", FlexDirection: 'row', flexWrap: 'wrap', overflow: '  scroll' }} className="weather__info">
        <div style={{ paddingTop: '2em', width: '30vw', margin: '0 auto' }}>
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
                        style={{ padding: '2em', height: '100%', width: '40vw' }} src={image} alt="gif that shows weather condition" />
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