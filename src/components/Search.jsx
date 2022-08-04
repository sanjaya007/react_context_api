import React from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const data = useGlobalContext();

  return (
    <div className="search-box flex-css">
      <div className="input-box">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => data.searchPost(e.target.value)}
          value={data.query}
        />
      </div>
    </div>
  );
};

export default Search;
