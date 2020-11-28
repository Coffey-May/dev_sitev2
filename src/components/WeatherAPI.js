import React from 'react'
require('dotenv').config();
console.log(process.env)
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
export function fetchData() {



    var city_name = "Nashville"

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${REACT_APP_API_KEY}`).then(response => {
        return response.json()
    }).then(data => {
        console.log(data)
        const num = (data.main.temp - 273.15) * 1.8000 + 32.00;
        const cities = document.getElementsByTagName('option');



        var citiesArr = cities;
        // console.log(citiesArr[0]);
        setTimeout(function () {
            [...citiesArr].forEach(function (element) {
                console.log(element.value)

            });
        }, 1000);

        var n = num.toFixed(2);
        let state;
        if (data.name === 'Dallas') {
            state = "TX"
        } else if (data.name === "Nashville") {
            state = "TN"
        } else if (data.name === "Los Angeles") {
            state = "CA"
        } else if (data.name === "London") {
            state = "UK"
        } else if (data.name === "New York City") {
            state = "NY"
        }
        document.getElementById('weather_card').innerHTML = `
        <div style ="height:10em; width:8em; border:1px solid white; ">
        <label style="color:white;" for="city-select">Choose City:</label>
        <select style="color:white;background-color: transparent;" name="cars" id="cars">
        <option class="select_city" style="background-color: transparent;" value="Select City">Select City</option>
        <option class="select_city" style="background-color: transparent;" value="Nashville">Nashville</option>
        <option class="select_city" style="background-color: transparent;" value="London">London</option>
        <option class="select_city" style="background-color: transparent;" value="New York City">New York City</option>
        <option class="select_city" style="background-color: transparent;" value="Los Angeles">Los Angeles</option>
        <option class="select_city" style="background-color: transparent;" value="Dallas">Dallas</option>
        </select>
        <div class="sun2"></div>
        <h4>${data.name}</h4>
         <h6>${state}</h6>
        <h6>${n} °F</h6>
        </div>
              `
    })
}
fetchData()



export default function WeatherAPI() {



    return (
        <div>


        </div>
    )
}

