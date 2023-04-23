import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "bootstrap/dist/css/bootstrap.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    // console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function searchCity() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8cd9be374c7c96c39a9fe73f4bf2f055&units=metric`;
    axios(url).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }
  if (weatherData.ready) {
    return (
      <div className="container">
        <form className="mb-3" onSubmit={handleSubmit}>
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
      </div>
    );
  } else {
    searchCity();
    return "Loading...";
  }
}
