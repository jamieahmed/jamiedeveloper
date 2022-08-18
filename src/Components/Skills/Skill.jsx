import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./style.css";

export default function Skill() {
  const [showEducation, setShowEducation] = useState(false);
  const [showSkill, setShowSkill] = useState(false);
  const [showExperience, setShowExperience] = useState(false);

  const handleCloseEducation = () => setShowEducation(false);
  const handleShowEducation = () => setShowEducation(true);

  const handleCloseSkill = () => setShowSkill(false);
  const handleShowSkill = () => setShowSkill(true);

  const handleCloseExperience = () => setShowExperience(false);
  const handleShowExperience = () => setShowExperience(true);

  return (
    <>
      <h2 className="Resume-title" id="resume">Resume</h2>
      <div class="resume-container">
        {/* Eduction */}
        <button
          className="resume-child "
          type="button"
          onClick={handleShowEducation}
        >
          <div>
            <h3 className="icon-title">Education</h3>
            <img
              src="../Images/education-logo.png"
              alt="education-logo"
              className="resume-images"
            />
          </div>
        </button>
        <Modal show={showEducation} onHide={handleCloseEducation}>
          <Modal.Header closeButton>
            <Modal.Title>Education</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>General Assembly</h5>
            <strong>Software Engineering Immersive</strong>
            <p>
              12-week training program providing a deep dive into the world of
              software engineering, focusing on improving skills to become a
              well-rounded full stack developer.
            </p>
            <h5>Harvest British College</h5>
            <strong>English as a Second Language Training Certificate </strong>
            <p>
              Successfully completed the British Diploma and passed the final
              examination of General English Courses along with Phonetics,
              Conversation, Business English, Translation and Soft Skills.
            </p>
          </Modal.Body>
        </Modal>

        {/* Skills */}
        <button
          className="resume-child "
          type="button"
          onClick={handleShowSkill}
        >
          <div>
            <h3 className="icon-title">Skills</h3>
            <img
              src="../Images/skills-logo.png"
              alt="skills-logo"
              className="resume-images"
            />
          </div>
        </button>
        <Modal show={showSkill} onHide={handleCloseSkill}>
          <Modal.Header closeButton>
            <Modal.Title>Skills</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Technical Skills</h5>
            <div className="Technical-Skills-icon">
              <img
                className="skill-image"
                src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"
                alt="HTML-icon"
              />
              <img
                className="skill-image"
                src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3"
                alt="-icon"
              />
              <img
                className="skill-image"
                src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white"
                alt="javaScript-icon"
              />
              <img
                className="skill-image"
                src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=black"
                alt="react-icon"
              />
              <img
                className="skill-image"
                src="https://img.shields.io/badge/-Bootstrap-563D7C?style=flat-square&logo=bootstrap"
                alt="bootstrap-icon"
              />
              <img
                className="skill-image"
                src="https://img.shields.io/badge/-Material_UI-0081CB?style=flat-square&logo=material-ui"
                alt="-icon"
              />
              <img
                className="skill-image"
                src="https://img.shields.io/badge/-NodeJS-339933?style=flat-square&logo=Node.js&logoColor=white"
                alt="-icon"
              />
              <img
                className="skill-image"
                src="https://img.shields.io/badge/-Express.js-404D59?style=flat-square&for-the-badge"
                alt="-icon"
              />
              <img
                className="skill-image"
                src="https://img.shields.io/badge/-MongoDB-white?style=flat-square&logo=mongodb"
                alt="-icon"
              />
              <img
                className="skill-image"
                src="https://img.shields.io/badge/-Python3-3776AB?style=flat-square&logo=Python&logoColor=white"
                alt="-icon"
              />
              <img
                className="skill-image"
                src="https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=postgresql"
                alt="-icon"
              />
              <img
                className="skill-image"
                src="https://img.shields.io/badge/-Django-092E20?style=flat-square&logo=django"
                alt="-icon"
              />
              <img
                className="skill-image"
                src="https://img.shields.io/badge/-VS_Code-007ACC?style=flat-square&logo=visual-studio-code"
                alt="-icon"
              />
              <img
                className="skill-image"
                src="https://img.shields.io/badge/-Git-black?style=flat-square&logo=git"
                alt="-icon"
              />
              <img
                className="skill-image"
                src="https://img.shields.io/badge/-Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white"
                alt="-icon"
              />
              <img
                className="skill-image"
                src="https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=heroku"
                alt="-icon"
              />
              <img
                className="skill-image"
                src="https://img.shields.io/badge/-Trello-0079BF?style=flat-square&logo=Trello&logoColor=white"
                alt="-icon"
              />
              <img
                className="skill-image"
                src="https://img.shields.io/badge/-figma-E34F26?style=flat-square&logo=figma&logoColor=white"
                alt="figma-icon"
              />
              <img
                className="skill-image"
                src="https://img.shields.io/badge/-Slack-4A154B?style=flat-square&logo=slack"
                alt="-icon"
              />
              <img
                className="skill-image"
                src="https://img.shields.io/badge/-Zoom-2D8CFF?style=flat-square&logo=zoom&logoColor=white"
                alt="-icon"
              />
              <img
                className="skill-image"
                src="https://img.shields.io/badge/Notion-%23000000.svg?style=flat-square&for-the-badge&logo=notion&logoColor=white"
                alt="-icon"
              />
              <img
                className="skill-image"
                src="https://img.shields.io/badge/-Excel-217346?style=flat-square&logo=Microsoft-Excel&logoColor=white"
                alt="-icon"
              />
            </div>
            <h5>Soft Skills</h5>
            <div className="Soft-Skills">
              <strong> Project Management </strong> |
              <strong> Teamwork & Leadership </strong> |
              <strong> Support of Business Goals </strong> |
              <strong> Creativity & Problem Solving </strong> |
              <strong> Tolerance & Patience </strong> |
              <strong> Attention to Details </strong> |
              <strong> Self-learning </strong> |<strong> Adaptability </strong>{" "}
              |<strong> Resourceful </strong> |
            </div>
          </Modal.Body>
        </Modal>

        {/* Experience */}
        <button
          className="resume-child "
          type="button"
          onClick={handleShowExperience}
        >
          <div>
            <h3 className="icon-title">Experience</h3>
            <img
              src="../Images/experience-logo.jpg"
              alt="experience-logo"
              className="resume-images"
            />
          </div>
        </button>
        <Modal show={showExperience} onHide={handleCloseExperience}>
          <Modal.Header closeButton>
            <Modal.Title>Experience</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Front End Developer</h5>
            <strong>Mefth</strong>
            <div>
              <small>➡️ Develop new user-facing features</small> <br />
              <small>
                ➡️ Define how the application looks and how it works
              </small>{" "}
              <br />
              <small>➡️ Structure and design of web pages</small> <br />
              <small>
                ➡️ Bridge the gap between graphic design and technical
                implementation
              </small>{" "}
              <br />
              <small>
                ➡️ Validate input before submitting to back end
              </small>{" "}
              <br />
              <small>➡️ Write front end code and test</small> <br />
            </div>
            <h5>Owner/Team Manager </h5>
            <strong>Farhana English Community </strong>
            <div>
              <small>➡️ Managed team of 30+ teachers</small> <br />
              <small>
                ➡️ Recruited teachers and students to increase our impact
              </small>{" "}
              <br />
              <small>➡️ Provided guidance to teachers and students</small>{" "}
              <br />
            </div>
            <h5>Driving Teacher Assistant </h5>
            <strong>Giyon Driving School</strong>
            <div>
              <small>
                ➡️ Helped clients with practical and theoretical driving
                training
              </small>{" "}
              <br />
              <small>
                ➡️ Provided feedback and instruction to clients to help them
                succeed
              </small>{" "}
              <br />
            </div>
            <h5>Constructor Manager Assistant/Supervisor </h5>
            <strong>Wedi Sudan</strong>
            <div>
              <small>
                ➡️ Led daily production and operation contractor meeting
              </small>{" "}
              <br />
              <small>
                ➡️ Helping the team understand performance targets and goals
              </small>{" "}
              <br />
              <small>
                ➡️ Facilitated strong communication to resolve issues
              </small>{" "}
              <br />
              <small>
                ➡️ Shared updates, financial results, and new objectives with
                team members
              </small>{" "}
              <br />
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
