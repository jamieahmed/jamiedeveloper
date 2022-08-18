import React from "react";
import { useState, useEffect } from "react";

const Card = ({ thing, filterState }) => {
  const [styleStuff, setStyleStuff] = useState({
    display: 'block'
  })

  useEffect(() => {
    if (thing.category !== filterState && filterState !== 'All') {
      setStyleStuff({
        display: 'none'
      })
    } else {
      setStyleStuff({
        display: 'block'
      })
    }
  }, [filterState]);


  return (
    <div className="card" style={styleStuff}>
      <img className="picture" src={thing.picture} alt="pic" />
      <p className="title">{thing.title}</p>
      <div className="overlay">
        <p className="overlay-title">Title: {thing.title}</p>
        <p className="overlay-status"> Status: {thing.status}</p>
        <p className="overlay-description">Description: {thing.description}</p>
        <p>
          <a href={thing.githubURL}>
            <button className="buttonGithub">Github</button>
          </a>
          <a href={thing.deploymentURL}>
            <button className="buttonDemo">Demo</button>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Card;
