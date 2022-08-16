import React from "react";
import "./style.css";

const Navigation = () => {
  return (
    <div>
      <nav className="navbar">
        <div>
          <a href="#home" className="brand">
            <strong className="l-1">J </strong>
            <strong className="l-2">A </strong>
            <strong className="l-3">M </strong>
            <strong className="l-4">I </strong>
            <strong className="l-5">E </strong>
          </a>
        </div>
        <ul>
          <li className="nav_item">
            <a href="/home">Home</a>
          </li>
          <li className="nav_item">
            <a href="/about">About me</a>
          </li>
          <li className="nav_item">
            <a href="/skills">Skills</a>
          </li>
          <li className="nav_item">
            <a href="/projects">Projects</a>
          </li>
          <li className="nav_item">
            <a href="/testimonial">Testimonial</a>
          </li>
          <li className="nav_item">
            <a href="/contactme">Contact Me</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
