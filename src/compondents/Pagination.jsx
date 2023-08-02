import React from "react";

function Pagination({ nextPage, prevPage }) {
  return (
    <div className="page">
      {prevPage && <button onClick={prevPage}>Previous</button>}
      {nextPage && <button onClick={nextPage}>Next</button>}
    </div>
  );
}

export default Pagination;
