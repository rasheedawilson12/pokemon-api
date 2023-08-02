import React from "react";

function PokemonStats(props) {
  return !props.data ? (
    ""
  ) : (
    <div className="PokemonStats">
      <h1>{props.data.name}</h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.data.id}.svg`}
        alt={props.data.name}
        className="statImg"
      />
      <div className="attacks">
        {props.data.abilities.map((attack) => {
          return (
            <div>
              <h2>{attack.ability.name}</h2>
            </div>
          );
        })}
      </div>
      <div className="base-statsContainer">
        <div className="baseInfo">
          <h3>Height: {props.data.height}</h3>
          <h3>Weight: {props.data.weight}</h3>
          {props.data.types.map((type) => {
            return (
              <div>
                <h3>Type:</h3>
                <span>{type.type.name}</span>
              </div>
            );
          })}
        </div>
        <div className="base-stats">
          {props.data.stats.map((stats) => {
            return (
              <div>
                <h3>
                  {stats.stat.name}: {stats.base_stat}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PokemonStats;
