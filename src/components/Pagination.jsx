import React from "react";
import { useGlobalContext } from "../context";

const Pagination = () => {
  const data = useGlobalContext();

  return (
    <div className="pagination-box flex-css-row">
      <div className="page flex-css-row-start">
        <button onClick={() => data.getPrevPage()}>Prev</button>
        <p>
          <span>{data.page + 1}</span> of <span>{data.nbPages}</span>
        </p>
        <button onClick={() => data.getNextPage()}>Next</button>
      </div>
    </div>
  );
};

export default Pagination;
