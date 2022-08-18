import React from "react";
import "./style.css";

const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" id="nav-general-controler">
        <div className="container-fluid">
          <div className="brand">
            <a className="brand-link" href="/">
              <strong>JAMIE</strong>
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="nav_item">
              <a href="#home">Home</a>
            </div>
            <div className="nav_item">
              <a href="#about-me">About Me</a>
            </div>
            <div className="nav_item">
              <a href="#resume">Resume</a>
            </div>
            <div className="nav_item">
              <a href="#projects">Projects</a>
            </div>
            <div className="nav_item">
              <a href="#testimonial">Testimonial</a>
            </div>
            <div className="nav_item">
              <a href="#contact-me">Contact Me</a>
            </div>
            <button id="light-dark-button" className="dark-mood">
              <i className="bi bi-moon-fill"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
