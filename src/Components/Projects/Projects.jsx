import React, { useState } from "react";
import "./style.css";
import Data from "./allData";
import Card from "./Card";

const Projects = () => {
  const [stuffArray, setStuffArray] = useState(Data);

  console.log(setStuffArray);

  return (
    <div>
      <h2 id="projects" className="projects-title">
        Projects
      </h2>
      <div className="project-parent">
        <div className="project-container">
          {stuffArray.map((thing, index) => {
            return <Card key={index} thing={thing} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
