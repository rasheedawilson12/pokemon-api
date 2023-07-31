import React from 'react'
import { Route, Routes } from "react-router-dom";
import Nav from './compondents/Nav';
import Main from './pages/Main';


function App() {
  return (
    <div>
        <Nav />
        <Main />
    </div>
  )
}

export default App