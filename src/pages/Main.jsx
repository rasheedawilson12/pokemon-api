import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../compondents/Card";
import PokemonStats from "../compondents/PokemonStats";

function Main() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();

  const getData = async () => {
    const response = await axios.get(url);
    const data = response.data.results;
    // console.log(data);
    // setData(data);
    setNext(response.data.next);
    setNext(response.data.previous);
    getPokeData(response.data.results);
  };

  const getPokeData = async (response) => {
    response.map(async (pokeData) => {
      const data = await axios.get(pokeData.url);
      setData((state) => {
        state = [...state, data.data];
        return state;
      });
    });
  };

  //   const nextPage = () => {
  //     setUrl(setNext);
  //   };

  //   const prevPage = () => {
  //     setUrl(setPrev);
  //   };

  useEffect(() => {
    getData();
  }, [url]);

  return (
    <div className="Main">
      <div className="listItems">
        <Card data={data} />
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
