import React from "react";

function Card(props) {
  return (
    <div className="cardContainer">
      {props.data.map((pokemon) => {
        return (
          <div className="Card">
            <h2>{pokemon.name}</h2>
            <img src="" alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default Card;
