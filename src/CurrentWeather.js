import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = props => {
  return (
    <div className="currentWeather">
      <h2>{props.currWeather.time}</h2>
      <h3>{props.currWeather.location}</h3>
      <h2>{props.currWeather.current}</h2>
      <p>
        {props.currWeather.high}
        {props.currWeather.low}
      </p>
      <p>{props.currWeather.conditions}</p>
      <p>{props.currWeather.icon}</p>
    </div>
  );
};

export default CurrentWeather;
