import React from "react";
import Card from "./Card.js";
import "./css/TenDay.css";

const TenDay = props => {
  const tenCardsToDisplay = props.tenDay.map((day, index) => {
    return <Card {...day} key={index} />;
  });

  return (
    <div>
      <h2 className="tenDay-header">Ten Day Forecast</h2>
      <div className="tenDay">{tenCardsToDisplay}</div>
    </div>
  );
};

export default TenDay;
