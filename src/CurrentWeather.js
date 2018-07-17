import React, { Component } from "react";
import MockData from "./MockData";

const CurrentWeather = props => {
  return (
    <div>
      <header>{props.currWeather}</header>
      <h4>{props.currDayOfWeek}</h4>
      <h5>{props.currDate}</h5>
      <h1>{props.currTemp}</h1>
      <h3>{props.currCity}</h3>
      <p>{props.currentCondition}</p>
      <h5>{props.highTemp}</h5>
      <h5>{props.lowTemp}</h5>
      <p>{props.dailyWeatherSummary}</p>
    </div>
  );
};
