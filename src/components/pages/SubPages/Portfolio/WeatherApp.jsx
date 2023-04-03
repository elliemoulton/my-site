import React, { useEffect, useState } from 'react';
import '../../../../styles/WeatherApp.css';
// import CurrentWeather from './CurrentWeather.jsx'

import ThermostatIcon from '@mui/icons-material/Thermostat';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// API KEY AND URL
const apiKey = process.env.REACT_APP_API_KEY;

function WeatherApp() {
    const [currentWeather, setCurrentWeather] = useState({});
    const [city, setCity] = useState('');
    const [forecast, setForecast] = useState({});
    const [geoCode, setGeoCode] = useState({});
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [localLat, setLocalLat] = useState('');
    const [localLon, setLocalLon] = useState('');
    // const [sunrise, setSunrise] = useState('');
    // const [sunset, setSunset] = useState('');
    const [units, setUnits] = useState('metric');

    //API urls
    const geoCodeApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
    const currentWeatherApiUrl =
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=` +
        units;
    const forecastApiUrl =
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=` +
        units;

    //get local coordinates
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLocalLat(position.coords.latitude);
            setLocalLon(position.coords.longitude);
        });
    });
    function getLocalCoordinates() {
        setLat(localLat);
        setLon(localLon);
    }

    // geo code
    useEffect(() => {
        fetch(geoCodeApiUrl)
            .then((res) => res.json())
            .then((data) => setGeoCode(data))
            .then(console.log('geoCode fetched'))
            .then(console.log('geoCodeApiUrl', geoCodeApiUrl))
            .then(console.log('geoCode', geoCode));
    }, [geoCodeApiUrl]);

    // current weather
    useEffect(() => {
        fetch(currentWeatherApiUrl)
            .then((res) => res.json())
            .then((data) => setCurrentWeather(data))
            .then(console.log('currentWeather set for', city))
            .then(console.log('currentWeatherApiUrl', currentWeatherApiUrl))
            .then(console.log('currentWeather', currentWeather));
    }, [lat, lon]);

    // forecast
    useEffect(() => {
        fetch(forecastApiUrl)
            .then((res) => res.json())
            .then((data) => setForecast(data))
            .then(console.log('forecast set for', city))
            .then(console.log('forecastApiUrl', forecastApiUrl))
            .then(console.log('forecast', forecast));
    }, [lat, lon]);

    useEffect(() => {
        console.log('lat/lon changed');
    }, [lat, lon]);

    // function handleCelsiusClick() {
    //     units = 'metric';
    // }

    // function handleFahrenheitClick() {
    //     units = 'imperial';
    // }

    // gets the value of city inputted
    const inputHandler = (event) => {
        setCity(event.target.value);
        console.log('city', city);
    };

    // what happens when you press the search button
    function submitHandler() {
        setLat(geoCode[0].lat);
        setLon(geoCode[0].lon);
        // console.log('lat', lat);
        // console.log('lon', lon, geoCode[0].lon);

        // setSunrise(currentWeather.sys.sunrise);
        // setSunset(currentWeather.sys.sunset);
        // console.log(sunrise);
        // console.log(sunset);

        console.log('city submitted', city);
    }

    return (
        <>
            <div className='weather-app'>
                <header>
                    <h1>Weather App</h1>
                </header>

                <input
                    type='text'
                    id='location-name'
                    className='form-control'
                    onChange={inputHandler}
                    value={city}
                    placeholder='City Name'
                />
                <button onClick={submitHandler}>
                    <SearchIcon />
                </button>
                <button onClick={getLocalCoordinates}>
                    <LocationOnIcon />
                </button>
                <br />

                {currentWeather.main && (
                    <>
                        {/* <button onClick={handleCelsiusClick}>&deg; C</button>
                        <button onClick={handleFahrenheitClick}>&deg; F</button> */}
                        <img
                            src={`http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`}
                            alt='weather status icon'
                        />
                        <p>
                            {currentWeather.name}, {currentWeather.sys.country}
                        </p>

                        <p>
                            <ThermostatIcon />
                            {Math.round(currentWeather.main.temp)} &deg; C
                        </p>
                        <p className='capitalize'>
                            {currentWeather.weather[0].description}
                        </p>
                        <p>latitude: {lat}</p>
                        <p>longitude: {lon}</p>
                        {/* <p>sunrise var: {sunrise}</p>
                        <p>sunset var: {sunset}</p> */}
                        <p>
                            formatted sunrise:
                            {new Date(
                                currentWeather.sys.sunrise * 1000
                            ).toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit',
                            })}
                        </p>
                        <p>
                            formatted sunset:
                            {new Date(
                                currentWeather.sys.sunset * 1000
                            ).toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit',
                            })}
                        </p>
                        <p>forecast: {forecast.cnt}</p>
                        <br />
                    </>
                )}
            </div>
        </>
    );
}

export default WeatherApp;
