import React, { useEffect, useContext } from "react";
import { useGlobalContext } from "../context";

const Stories = () => {
  const data = useGlobalContext();

  if (data.isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="stories-box">
      {data.hits.map((value, index) => {
        return (
          <div className="card" key={value.objectID}>
            <div className="title">
              <h1>{value.title}</h1>
            </div>
            <div className="author">
              <p>
                By <span>{value.author}</span> |{" "}
                <span>{value.num_comments} comments</span>
              </p>
            </div>
            <div className="link flex-css-row-sb">
              <a href={value.url} target="__blank" className="read-link">
                Read More
              </a>
              <a
                href="#"
                className="remove-link"
                onClick={(e) => {
                  e.preventDefault();
                  data.removePost(value.objectID);
                }}
              >
                Remove
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
