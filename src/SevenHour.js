import React from "react";
import SevenHourCard from './Card.js';
import "./css/SevenHour.css";

const SevenHour = props => {
  return (
    <div className="sevenHour-container">
      <header>{props.sevenHourForecast}</header>
      <p>{props.hour}</p>
      <img src={props.weatherImg} />
      <h2>{props.temp}</h2>
    </div>
  );
};

export default SevenHour;
