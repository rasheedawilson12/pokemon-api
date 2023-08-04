import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../compondents/Card";
import PokemonStats from "../compondents/PokemonStats";
// import Pagination from "../compondents/Pagination";

function Main() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [loading, setLoading] = useState(true);
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();
  const [pokeDex, setPokeDex] = useState();

  const getData = async () => {
    setLoading(true);
    const response = await axios.get(url);
    // const data = response.data.results;
    // console.log(data);
    // setData(data);
    setNext(response.data.next);
    setPrev(response.data.previous);
    getPokeData(response.data.results);
    setLoading(false);
  };

  const getPokeData = async (response) => {
    response.map(async (pokeData) => {
      const data = await axios.get(pokeData.url);
      setData((state) => {
        state = [...state, data.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  useEffect(() => {
    getData();
  }, [url]);

  const prevPage = () => {
    setData([]);
    setUrl(prev);
  };

  const nextPage = () => {
    setData([]);
    setUrl(next);
  };

  return (
    <div className="Main">
      <div className="listItems">
        <Card
          data={data}
          loading={loading}
          pokemonInfo={(pokemon) => setPokeDex(pokemon)}
        />
        <div className="page">
          <button onClick={prev ? prevPage : null}>Prev</button>
          <button onClick={next ? nextPage : null}>Next</button>
        </div>
      </div>

      <div className="stats">
        <PokemonStats data={pokeDex} />
      </div>
    </div>
  );
}

export default Main;
