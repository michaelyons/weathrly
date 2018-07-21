import React from "react";
import "./css/SevenHour.css";

const sevenHour = props => {
  return (
    <div className="sevenHour-container">
      <header>{props.sevenHourForecast}</header>
      <p>{props.hour}</p>
      <img src={props.weatherImg} />
      <h2>{props.temp}</h2>
    </div>
  );
};

export default sevenHour;
