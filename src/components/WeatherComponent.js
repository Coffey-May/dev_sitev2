import React from "react";
import Form from "./Form";
import Weather from "./Weather";
import { FaCopyright } from 'react-icons/fa';



require('dotenv').config();

const API_KEY = process.env.REACT_APP_API_KEY;



class WeatherComponent extends React.Component {


    constructor() {
        super();

        this.state = {
            jsonReturnedValue: null
        }
    }

    componentDidMount() {
        let city = "Nashville"
        let country = "US"
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`)
            .then(response => response.json())
            .then(json => {
                this.setState({ jsonReturnedValue: json });
            });
        console.log("deez nuts")
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
            <>
                <div className="weather-div">
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

                                    </div>

                                </div>
                                <Form getWeather={this.getWeather} />
                            </div>
                        </div>
                    </div>
                </div>
                <footer id="footer2" style={{ border: '1px solid black', height: '10vh', backgroundColor: 'black', color: 'white' }}>


                    <br />
                    <FaCopyright /> COPYRIGHT2020
</footer>
            </>
        );
    }
};

export default WeatherComponent;



