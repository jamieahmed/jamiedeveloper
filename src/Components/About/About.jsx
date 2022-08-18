import React from "react";
import "./style.css";

const About = () => {
  return (
    <div className="about-page" id="about-me">
      {/* left side of about page*/}
      <div className="about-left">
        <img src="../Images/jamie2.jpg" alt="n" className="about-image" />
      </div>
      {/* right side of about page */}
      <div className="about-right">
        <h3 className="about-me-title">About Me </h3>
        <div className="about-me-description">
          <p>
            I am a full stack software engineer based in the New York City
            Metropolitan Area with a background in business and management. I
            have recently completed General Assembly's full time Software
            Engineering Immersive program where I learned software development
            and engineering. I am looking to embark on my journey as a software
            engineer by working on cutting edge software at a company that can
            grow with. for more info please{" "}
            <a href="#contact-me" className="go-to-contact-me">
              {" "}
              contact me
            </a>
          </p>
        </div>
        {/* quote start here */}
        <blockquote className="jamie-blockquote">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod
          nisi porta lorem mollis. Id interdum velit laoreet id donec ultrices.
          Nulla aliquet enim tortor at. Ut diam quam nulla porttitor massa id
          neque aliquam vestibulum..
          <span>" Jamie Ahmed "</span>
        </blockquote>{" "}
        {/* quote end here */}
      </div>
    </div>
  );
};

export default About;
