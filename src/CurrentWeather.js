import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = ({
  time,
  location,
  current,
  high,
  low,
  conditions,
  icon
}) => {
  return (
    <div className="currentWeather">
      <h2>{time}</h2>
      <h3>{location}</h3>
      <h2>{current}</h2>
      <p>
        {high}; {low}
      </p>
      <p>{conditions}</p>
      <p>{icon}</p>
    </div>
  );
};

export default CurrentWeather;
