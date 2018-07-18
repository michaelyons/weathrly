import React, { Component } from "react";

const CurrentWeather = props => {
  return (
    <div>
      <header>Current Weather</header>
      <h4>{props.currentWeather.local_time_rfc822}</h4>
      <h5>{props.currentWeather.local_time_rfc822}</h5>
      <h1>{props.currentWeather.temp_f}</h1>
      <h3>{props.currentWeather.display_location.full}</h3>
      <p>{props.currentWeather.weather}</p>
      <h5>{props.highTemp}65</h5>
      <h5>{props.lowTemp}45</h5>
      <img src={props.currentWeather.icon_url} />
    </div>
  );
};

export default CurrentWeather;
