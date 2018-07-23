import React from "react";
import Card from "./Card.js";
import "./css/SevenHour.css";

const SevenHour = props => {
  const cardsToDisplay = props.sevenHour.map(hour => {
    return <Card {...hour} />;
  });

  return <div className="sevenHour">{cardsToDisplay}</div>;
};

export default SevenHour;
