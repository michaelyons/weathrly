import React, { Component } from 'react';

const SevenHourCard = props => {
  return (
   <div className="sevenHourCard">
      <p>{props.sevenHour.hour}</p>
      <img src={props.sevenHour.weatherImg} />
      <h2>{props.sevenHour.temp}</h2>
   </div>
  )
}

export default SevenHourCard;