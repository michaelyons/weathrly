import React from "react";
import MockData from "./MockData";

const sevenHour = props => {
  return (
    <div>
      <header>{props.sevenHourForecast}</header>
      <p>{props.hour}</p>
      <img src={props.weatherImg} />
      <h2>{props.temp}</h2>
    </div>
  );
};
