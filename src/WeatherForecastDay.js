import React from "react";
import "./App.css";

export default function WeatherForecastDay(props) {
  function formatDay() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="weather-forecast-date">{formatDay()}</div>
      <div>
        <img
          src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.condition.icon}.png`}
          alt={props.data.condition.icon}
          width={40}
        />
      </div>
      <div className="weather-forecast-temperatures">
        <span className="weather-forecast-temperature-max">
          {Math.round(props.data.temperature.maximum)}°
        </span>{" "}
        <span className="weather-forecast-temperature-min">
          {Math.round(props.data.temperature.minimum)}°C
        </span>
      </div>
    </div>
  );
}
