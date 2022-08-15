import React from "react";
import "./style.css";

const About = () => {
  return (
    <div className="about-page">
      {/* left side of about page*/}
      <div className="about-left">
        <img src="../Images/jamie2.jpg" alt="n" className="about-image" />
      </div>
      {/* right side of about page */}
      <div className="about-right">
        <h3 className="about-me-title">About Me </h3>
        <div className="about-me-description">
          <p>
            I am a full stack software engineer based in the New York City Metropolitan
            Area with a background in business and management.
            I have recently completed General Assembly's full time Software
            Engineering Immersive program where I learned software development and engineering.
            I am looking to embark on my journey as a software engineer
            by working on cutting edge software at a company that can grow with.
            for more info please <a href="#ContactMe">contact me</a>
          </p>

        </div>
        {/* quote start here */}
        <blockquote className="jamie-blockquote">
          Love yourself first and everything else falls into line. You really
          have to love yourself to get anything done in this world. Don’t be
          distracted by criticism. Remember — the only taste of success some
          people get is to take a bite out of you. Don’t be distracted by
          criticism. Remember — the only taste of success some people get is to
          take a bite out of you.
          <span>" Jamie Ahmed "</span>
        </blockquote>{" "}
        {/* quote end here */}
      </div>
    </div>
  );
};

export default About;
