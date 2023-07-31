import React from "react";
import Card from "../compondents/Card";
import PokemonStats from "../compondents/PokemonStats";

function Main() {
  return (
    <div className="Main">
      <div className="listItems">
        <Card />
      </div>
      <div className="stats">
        <PokemonStats />
      </div>
    </div>
  );
}

export default Main;
