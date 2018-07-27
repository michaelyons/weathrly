import React from "react";
import Card from "./Card.js";
import "./css/SevenHour.css";

const SevenHour = props => {
  const cardsToDisplay = props.sevenHour.map((hour, index) => {
    return <Card {...hour} key={index} />;
  });

  return (
    <div>
      <h2 className="sevenHour-header">Seven Hour Forecast</h2>
      <div className="sevenHour">{cardsToDisplay}</div>
    </div>
  );
};

export default SevenHour;
