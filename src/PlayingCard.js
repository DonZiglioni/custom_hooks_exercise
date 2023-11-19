import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import useToggleState from "./hooks/useToggleState";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {

  const [isFlipped, setIsFlipped] = useToggleState(true);

  return (
    <img
      src={isFlipped ? front : back}
      alt="playing card"
      onClick={setIsFlipped}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
