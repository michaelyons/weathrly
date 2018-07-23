import React from 'react';
import Card from './Card.js';
import "./css/TenDay.css";

const TenDay = props => {
  const tenCardsToDisplay = props.tenDay.map(day => {
    return <Card {...day} />;
  });

  return <div>{tenCardsToDisplay}</div>;
};

export default TenDay;