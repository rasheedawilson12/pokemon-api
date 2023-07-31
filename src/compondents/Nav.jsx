import React from "react";

function Nav() {
  return (
    <div className="navbar">
      <h1>Pokemon API Pokedex</h1>
      <select className="selectType">
        <option value="">Select a Type</option>
        <option></option>
      </select>
    </div>
  );
}

export default Nav;
