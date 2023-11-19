import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import PlayingCard from "./PlayingCard";
import useAxios from "./hooks/useAxios";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, setCards] = useState([]);
  const cardUrl = "https://deckofcardsapi.com/api/deck/new/draw/";

  const data = useAxios(cardUrl, null);

  if (data.isLoading) return <div>Loading...</div>;
  if (data.error) return <div>Error, Please Try Again...</div>;

  const response = data.response.data.cards[0];

  const addCard = () => {
    data.reFetch(cardUrl);
    setCards(cards => [...cards, { ...response, id: uuid() }]);
  };

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
