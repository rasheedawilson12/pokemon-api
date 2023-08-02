import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import Nav from "./compondents/Nav";
import Main from "./pages/Main";
// import Pagination from Pagination;

function App() {
  return (
    <div>
      <Nav />
      <Main />
    </div>
  );
}

export default App;
