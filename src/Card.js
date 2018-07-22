import React from "react";

const Card = props => {
  return (
    <div className="sevenHourCard">
      <p>{props.time}</p>
      <img src={props.icon_url} />
      <h2>{props.temp}</h2>
    </div>
  );
};

export default Card;
