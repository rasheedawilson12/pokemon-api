import React from "react";

function Card(props) {
  return (
    <div className="cardContainer">
      {/* {console.log(props.data)} */}
      {props.loading ? (
        // <div className="loader"></div>
        <h1>Loading...</h1>
      ) : (
        props.data.map((pokemon) => {
          return (
            <div
              className="Card"
              key={pokemon.id}
              onClick={() => props.pokemonInfo(pokemon)}
            >
              <h2>{pokemon.id}</h2>
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="cardImg"
              />
              <h2>{pokemon.name}</h2>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Card;
