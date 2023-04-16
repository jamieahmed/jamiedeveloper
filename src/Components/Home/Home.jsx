import React from "react";
import "./style.css";

const Home = () => {
  return (
    <div id="home" className="home-container">
      {/* left side of home */}
      <div className="home-child-content">
        <h3 className="my-name">
          <strong className="hi"> Hi,</strong>
          I'm Jamie Ahmed
        </h3>
        <strong className="role">Full Stack Software Engineer👨‍💻</strong>
        <p className="short-description">
          🧑🏿‍💻Passionate Software Engineer with management skills specializing in
          full-stack web application development. Experienced in designing and
          maintaining fully-fledged websites and applications. Proven expertise
          in both frontend and backend technologies, with a keen eye for design
          and a commitment to delivering efficient and high-quality code.
          Constantly learning and staying up-to-date with industry trends.
          Committed to creating innovative software solutions that drive
          business success.
        </p>
        <div>
          <button className="buttonH">
            <a href="#contact-me">Contact Me</a>
          </button>
          <a
            href="../assets/Jamie-Ahmed-Resume.pdf"
            download="Jamie-Ahmed-Resume.pdf"
          >
            <button className="buttonH">Download Resume!</button>
          </a>
        </div>
      </div>
      {/* right side of home  */}
      <div className="home-child-pic">
        <img className="profile-pic" src="../Images/jamie1.jpg" alt="pic" />
      </div>
    </div>
  );
};

export default Home;
