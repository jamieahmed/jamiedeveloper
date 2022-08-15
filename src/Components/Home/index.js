import React from "react";
// import Typical from "react-typical";
import { MdDownloadForOffline } from "react-icons/md";

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
        {/* <strong className="strong-typical">
          <Typical
            steps={[
              "Full Stack Web Developer👨‍💻",
              1000,
              "Software engineer🧑🏿‍💻",
              1000,
              "Project Manager👨🏿‍💼",
              1000,
              " 📞 +1(732)221-0182",
              1000,
              " 📧 jamieahemd273@gmail.com",
              1000,
            ]}
            wrapper="p"
            loop={Infinity}
          />
        </strong> */}
        <p className="short-description">
        🧑🏿‍💻Software Engineer with management skills who is passionate about developing full-stack,
          scalable web applications. I design, develop and maintain fully-fledged websites and applications..
        </p>
        <div>
          <button className="button">
            <a href="#ContactMe">Hire me</a>
          </button>
          <button className="button">
            <a href="Resume.pdf" download="jamie-resume.pdf">
              <MdDownloadForOffline className="button-icon" />
              Download Resume!
            </a>
          </button>
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
