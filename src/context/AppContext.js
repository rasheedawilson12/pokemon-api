import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [loading, setLoading] = useState(true);
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();
  const [pokeDex, setPokeDex] = useState();

  const prevPage = () => {
    setData([]);
    setUrl(prev);
  };

  const nextPage = () => {
    setData([]);
    setUrl(next);
  };

  return (
    <AppContext.Provider
      value={{
        nextPage,
        prevPage,
        data,
        setData,
        url,
        setUrl,
        loading,
        setLoading,
        next,
        setNext,
        prev,
        setPrev,
        pokeDex,
        setPokeDex,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
