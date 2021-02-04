import React from "react";
import Form from "./Form";
import Weather from "./Weather";
import { FaCopyright } from 'react-icons/fa';

import Pic from './weathergif.gif'
import Pic2 from './cloudygif.gif'
import Pic3 from './raingif.gif'
import Pic4 from './snowgif.gif'
import Pic5 from './foggif.gif'

require('dotenv').config();

const API_KEY = process.env.REACT_APP_API_KEY;

var image = Pic2
function imageFilter(x) {
    console.log(x)
    console.log(Pic)
    if (typeof x === "undefined") {
        image = Pic5
    }
    else if (x === "light rain" || x === "moderate rain" || x === "heavy intensity rain" || x === "very heavy rain" || x === "extreme rain" || x === "light intensity shower rain" || x === "freezing rain" || x === "shower rain" || x === "heavy intensity shower rain" || x === "	ragged shower rain" || x === "light intensity drizzle") {
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
    console.log(image)
}

var sectionStyle = {
    background: "linear-gradient(rgba(255, 238, 142, 0.637), rgba(114, 136, 72, 0.637), rgba(27, 58, 36, 0.61)) ",
    backgroundImage: `url(${image})`,
    height: "80vh",
    backgroundRepeat: "no - repeat",
    backgroundSize: "cover",
    padding: "2em"
}

class WeatherComponent extends React.Component {


    async getWeatherData() {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Nashville,US&appid=${API_KEY}&units=imperial`)
        res.json()
            .then(data => {
                // console.log(data)
                this.setState({
                    temperature: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    humidity: data.main.humidity,
                    description: data.weather[0].description,
                    error: undefined
                })

                imageFilter(data.weather[0].description)
            });
    }
    componentDidMount() {
        this.getWeatherData()

        // console.log('hi')
    }

    state = {

        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
        const data = await api_call.json();

        function timeConverter(UNIX_timestamp) {
            var a = new Date(UNIX_timestamp * 1000);
            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var year = a.getFullYear();
            var month = months[a.getMonth()];
            var date = a.getDate();
            var hour = a.getHours();
            var min = a.getMinutes();
            var sec = a.getSeconds();
            var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
            return time;
        }
        console.log(timeConverter(data.dt));

        console.log(data.dt)

        if (city && country) {
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            });


            console.log(data.weather[0].description)
            imageFilter(data.weather[0].description)
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter the values."
            });
        }

    }


    render() {
        return (
            <>

                <div style={sectionStyle}>
                    <div className="weather-wrapper">
                        <div className="main">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-5 title-container">

                                    </div>
                                    <div style={{ height: '60vh' }}>


                                        <Weather
                                            temperature={this.state.temperature}
                                            humidity={this.state.humidity}
                                            city={this.state.city}
                                            country={this.state.country}
                                            description={this.state.description}
                                            error={this.state.error}
                                        />
                                        <Form getWeather={this.getWeather} />
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <footer id="footer2" style={{ border: '1px solid black', height: '10vh', backgroundColor: 'black', color: 'white' }}>


                    <br />
                    <FaCopyright /> COPYRIGHT{new Date().getFullYear()}
                </footer>
            </>
        );
    }
};

export default WeatherComponent;



