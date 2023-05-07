import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import { Blocks } from "react-loader-spinner";
import "bootstrap/dist/css/bootstrap.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function searchCity() {
    const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=4a024tf7d3bb1a1d99bfb3e958o13344&units=metric`;
    axios(url).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }
  if (weatherData.ready) {
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div class="row">
            <div class="col-9">
              <input
                type="search"
                className="form-control"
                onChange={updateCity}
                placeholder="Enter city"
                name="query"
                autocomplete="off"
              />
            </div>
            <div class="col-3">
              <input
                className="btn btn-primary w-100"
                type="submit"
                value="Submit"
              />
            </div>
          </div>
        </form>
        <WeatherInfo info={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    searchCity();
    return (
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    );
  }
}
