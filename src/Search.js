import React, { useState } from "react";
import axios from "axios";
// import "./styles.css";
export default function Search() {
  let [city, setCity] = useState("");

  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  function showWeather(response) {
    // console.log(response);
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
    console.log(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8cd9be374c7c96c39a9fe73f4bf2f055&units=metric`;
    axios(url).then(showWeather);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateCity} />
        <input type="submit" />
      </form>

      <p>{description}</p>
      <div className="wrap">
        <div className="weather-temp">
          <div>
            <img src={icon} alt={description} />
          </div>
          <div>
            <strong className="temp">{temperature}</strong>{" "}
            <span className="units">
              <a href="#" id="celsius-link" class="active">
                °C
              </a>{" "}
              |
              <a href="#" id="fahrenheit-link">
                °F
              </a>
            </span>
          </div>
        </div>
        <div className="wind">
          <ul>
            <li>Humidity: {humidity}%</li>
            <li>Wind: {wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
