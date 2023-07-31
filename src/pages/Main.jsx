import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../compondents/Card";
import PokemonStats from "../compondents/PokemonStats";

function Main() {
  const [data, setData] = useState([]);
  // const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");

  const getData = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const data = response.data.results;
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Main">
      <div className="listItems">
        <Card />
        <div className="page">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
      <div className="stats">
        <PokemonStats />
      </div>
    </div>
  );
}

export default Main;
