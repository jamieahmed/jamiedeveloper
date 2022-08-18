import React, { useState } from "react";
import "./style.css";
import Data from "./allData";
import Card from "./Card";

const Projects = () => {
  const [stuffArray, setStuffArray] = useState(Data);
  const [filterState, setFilterState] = useState("Front-end");
  return (
    <div>
      <h2 id="projects" className="projects-title">
        Projects
      </h2>
      <div className="project-parent">
        <div className="filter-container">
          <button
            className="filter-button"
            onClick={() => {
              setFilterState("Front-end");
            }}
          >
            Front end
          </button>
          <button
            className="filter-button"
            onClick={() => {
              setFilterState("Back-end");
            }}
          >
            Back end
          </button>
          <button
            className="filter-button"
            onClick={() => {
              setFilterState("Full-Stack");
            }}
          >
            Full-Stack
          </button>
          <button
            className="filter-button"
            onClick={() => {
              setFilterState("All");
            }}
          >
            All Projects
          </button>
        </div>
        <div className="project-container">
          {stuffArray.map((thing, index) => {
            return <Card key={index} thing={thing} filterState={filterState} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
