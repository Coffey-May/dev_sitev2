import React, { useEffect } from "react";
import Form from "./Form";
import Weather from "./Weather";


require('dotenv').config();
console.log(process.env)
const API_KEY = process.env.REACT_APP_API_KEY;


//Whether component
class WeatherComponent extends React.Component {


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
        console.log(data)
        if (city && country) {
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            });
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
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-5 title-container">

                                </div>
                                <div className="col-xs-7 form-container">
                                    <Form getWeather={this.getWeather} />

                                    <Weather
                                        temperature={this.state.temperature}
                                        humidity={this.state.humidity}
                                        city={this.state.city}
                                        country={this.state.country}
                                        description={this.state.description}
                                        error={this.state.error}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default WeatherComponent;