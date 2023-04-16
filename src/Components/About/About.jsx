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
            I am an accomplished full stack software engineer based in the
            dynamic Seattle metropolitan area, known for driving business
            success through innovative software solutions. With comprehensive
            expertise in cutting-edge technologies, including frontend and
            backend development, testing, and tools such as Git and Heroku, I
            bring a solid technical acumen to every project.
          </p>
          <p>
            What sets me apart is my keen eye for detail and passion for
            creating scalable solutions that align with organizational goals. I
            have a proven track record of contributing to projects that have
            improved processes, solved complex problems, and delivered
            high-quality software solutions. My strong soft skills, including
            excellent communication and collaboration abilities, make me a true
            team player who excels in fast-paced environments and meets tight
            deadlines with ease.
          </p>
          <p>
            As a software engineer, I have a solid understanding of
            microservices architecture and Agile/Scrum development methodology.
            I am now eagerly seeking opportunities to take my expertise to the
            next level at a forward-thinking company that embraces cutting-edge
            software development and offers ample opportunities for growth.
          </p>
          <p>
            If you're seeking a dedicated and forward-thinking software engineer
            who can make a meaningful impact on your team, I would be thrilled
            to discuss how I can contribute to your organization's success.
            Please feel free to
            <a href="#contact-me" className="go-to-contact-me">
              {" "}
              contact me
            </a>{" "}
            for more information or to schedule a meeting. Let's work together
            to create innovative software solutions that push boundaries and
            drive business growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
