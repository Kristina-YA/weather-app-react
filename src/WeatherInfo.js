import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  // console.log(props.info);
  return (
    <div className="d-flex flex-row mb-2 justify-content-between">
      <div className="p-2">
        <h3 id="city">{props.info.city}</h3>
        <ul class="p-2">
          <li>
            <FormatDate date={props.info.date} />
          </li>
          <li className="list-item">{props.info.description}</li>
        </ul>
        <div className="d-flex align-items-center weather-temperature">
          <img
            src={props.info.icon}
            alt={props.info.description}
            id="icon"
            className="icon flex-shrink-0"
          />
          <div className="flex-grow-1 ms-3">
            <WeatherTemperature celsius={props.info.temperature} />
          </div>
        </div>
      </div>

      <div className="d-flex align-self-end">
        <ul className="list p-2">
          <li className="list-item" id="wind">
            Wind: {props.info.wind} km/h
          </li>
          <li className="list-item" id="humidity">
            Humidity: {props.info.humidity}%
          </li>
        </ul>
      </div>
    </div>
  );
}
