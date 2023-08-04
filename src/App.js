import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./compondents/Nav";
import Main from "./pages/Main";
// import Pagination from Pagination;

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
