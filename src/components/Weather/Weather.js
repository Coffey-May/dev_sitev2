import React from "react";
import Pic from '../Weather/WeatherImages/weathergif.gif'
import Pic2 from '../Weather/WeatherImages/cloudygif.gif'
import Pic3 from '../Weather/WeatherImages/raingif.gif'
import Pic4 from '../Weather/WeatherImages/snowgif.gif'
import Pic5 from '../Weather/WeatherImages/foggif.gif'
var image;
function imageFilter(x) {

    if (x === "light rain" || x === "moderate rain" || x === "heavy intensity rain" || x === "very heavy rain" || x === "extreme rain" || x === "light intensity shower rain" || x === "freezing rain" || x === "shower rain" || x === "heavy intensity shower rain" || x === "	ragged shower rain" || x === "light intensity drizzle") {
        image = Pic3
    }
    else if (x === "clear sky") {
        image = Pic
    }
    else if (x === 'scattered clouds' || x === 'overcast clouds' || x === 'broken clouds' || x === 'few clouds') {
        image = Pic2
    }
    else if (x === "light snow" || x === "snow" || x === "heavy snow" || x === "sleet" || x === "light shower sleet" || x === "shower sleet" || x === "light rain and snow" || x === "rain and snow" || x === "light shower snow" || x === "shower snow" || x === "heavy shower snow") {
        image = Pic4
    }
    else if (x === "mist" || x === "smoke" || x === "haze" || x === "fog" || x === "dust" || x === "volcanic ash" || x === "squalls" || x === "tornado" || x === "	sand/ dust whirls" || x === "sand") {
        image = Pic5
    }

}
var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

var time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });

const onClose = () => {
    window.opener = null;
    window.open("", "_self");
    window.close();
};

const Weather = props => (


    <div style={{ fontSize: '.15em', display: "flex", FlexDirection: 'row', flexWrap: 'wrap', overflow: '  scroll' }} className="weather__info">

        <div style={{ paddingTop: '2em', width: '30vw', fontSize: '.15em', margin: '0 auto' }}>
            <h2 style={{ margin: '0 auto' }}>Currently: {time}<br />{date} </h2>
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
            {imageFilter(props.description)}
            {
                <div className="sun-2-container">
                    <img
                        style={{ padding: '2em', height: '100%', width: '40vw' }} src={image} alt="gif that shows weather condition" />
                </div>
            }

        </div>
        {
            props.error && <h3 style={{ marginLeft: '3em' }} className="weather__error">{props.error}</h3>
        }
        <button style={{ fontWeight: 'bolder', margin: '1em', width: '8em', height: '8em', color: 'black' }} onClick={onClose}>X</button>
    </div>
);

export default Weather;