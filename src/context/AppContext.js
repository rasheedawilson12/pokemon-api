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

  return (
    <AppContext.Provider
      value={{
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
