import React from "react";
import Form from "./Form";
import Weather from "./Weather";
import { FaCopyright } from 'react-icons/fa';
import Pic2 from '../Weather/WeatherImages/cloudygif.gif';

require('dotenv').config();

const API_KEY = process.env.REACT_APP_API_KEY;
var image = Pic2
var sectionStyle = {
    background: "linear-gradient(rgba(255, 238, 142, 0.637), rgba(114, 136, 72, 0.637), rgba(27, 58, 36, 0.61)) ",
    backgroundImage: `url(${image})`,
    height: "80vh",
    backgroundRepeat: "no - repeat",
    backgroundSize: "cover",
    padding: "2em"
}
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
const url = 'https://api.openweathermap.org'
class WeatherComponent extends React.Component {

    async getWeatherData() {
        const res = await fetch(`${url}/data/2.5/weather?q=Nashville,US&appid=${API_KEY}&units=imperial`)

        console.log(res)
        res.json()
            .then(data => {

                this.setState({
                    time: timeConverter(data.dt),
                    temperature: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    humidity: data.main.humidity,
                    description: data.weather[0].description,
                    error: undefined
                })
            });
    }
    componentDidMount() {
        this.getWeatherData()
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
        const api_call = await fetch(`${url}/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);

        const data = await api_call.json();

        console.log(timeConverter(data.dt));

        console.log(data.timezone);
        try {
            if (city && country) {
                this.setState({
                    time: timeConverter(data.dt),
                    temperature: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    humidity: data.main.humidity,
                    description: data.weather[0].description,
                    error: ""
                });
            } else {
                this.setState({
                    time: undefined,
                    temperature: undefined,
                    city: undefined,
                    country: undefined,
                    humidity: undefined,
                    description: undefined,
                    error: "Please enter the values."
                });
            }
        }
        catch (error) {
            console.log(error)
            this.setState({
                error: "Please check spelling"
            })
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
                                            time={this.state.time}
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



