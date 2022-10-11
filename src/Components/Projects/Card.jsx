import React from "react";
import "./style.css";

const Card = ({ thing }) => {
  return (
    <div className="card">
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
