import React from "react";
import "./style.css";

import { useState, useEffect } from "react";

const Card = ({ thing, filterState }) => {
  const [styleStuff, setStyleStuff] = useState({
    display: "block",
  });

  useEffect(() => {
    if (thing.category !== filterState && filterState !== "All") {
      setStyleStuff({
        display: "none",
      });
    } else {
      setStyleStuff({
        display: "block",
      });
    }
  }, [filterState]);

  return (
    <div className="card" style={styleStuff}>
      <img className="picture" src={thing.picture} alt="pic" />
      <p className="title">{thing.title}</p>
      <p className="status">{thing.status}</p>
      <div className="link-container">
        <a href={thing.githubURL}>
          <button className="go-to-link">GitHub</button>
        </a>
        <a href={thing.deploymentURL}>
          <button className="go-to-link">Demo</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
