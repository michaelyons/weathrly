import React from "react";

const Card = props => {
  if (props.time) {
    return (
      <div className="sevenHourCard">
        <p>{props.time}</p>
        <img src={props.icon_url} alt="weather icon" />
        <h2>{props.temp}</h2>
      </div>
    );
  }
  if (props.day) {
    return (
      <div className="tenDayCard">
        <h2>{props.day}</h2>
        <p>{props.date}</p>
        <h2>{props.high}</h2>
        <h2>{props.low}</h2>
        <img src={props.icon} alt="weather icon" />
      </div>
    );
  }
};

export default Card;
