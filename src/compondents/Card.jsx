import React from "react";

function Card(props) {
  return (
    <div className="cardContainer">
      {console.log(props.data)}
      {/* {props.data.map((pokemon) => {
        return <h2>{pokemon.id}</h2>;
      })} */}
    </div>
  );
}

export default Card;
