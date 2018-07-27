import React from "react";
import "./css/CurrentWeather.css";

const CurrentWeather = props => {
  return (
    <div className="currentWeather">

      <div className="left-side">
        <img src={props.currWeather.icon} className="weather-icon" alt="" />
        <p>{props.currWeather.conditions}</p>
        <div className="high">
          <p>
            <div>{props.currWeather.high}</div>
            <div>{props.currWeather.low}</div>
          </p>
        </div>
      </div>
      <h2 className="right-side">{props.currWeather.current}</h2>
      <h2>{props.currWeather.time}</h2>
    </div>
  );
};

export default CurrentWeather;
