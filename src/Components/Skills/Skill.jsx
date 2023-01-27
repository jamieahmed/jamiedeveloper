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
      <h2 className="Resume-title" id="resume">
        Resume
      </h2>
      <div className="resume-container">
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
            <Modal.Title> Education </Modal.Title>
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
            <strong>English as a Second Language Training</strong>
            <p>
              Successfully completed the British Diploma and passed the final
              examination of General English Courses along with Phonetics,
              Conversation, Business English, Translation and Soft Skills.
            </p>

            <h5>YAT Learning Solutions </h5>
            <strong>Software development course </strong>
            <p>
              Successfully completed the yat learning solutions software
              development course.
            </p>

            <h5>Eritrean Institute of Technology </h5>
            <strong>Computer science </strong>
            <p>bachelor of science - Computer science</p>
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
              <strong> Self-learning </strong> |<strong> Adaptability </strong>|
              <strong> Resourceful </strong> |
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
            {/* job 1 */}
            <h5>Front End Developer</h5>
            <strong>
              Mefth{" "}
              <strong className="placeanddate">
                Cairo, Egypt 03/2019 - 10/2019
              </strong>
            </strong>
            <div>
              <small>
                ● Coded using HTML, CSS, JavaScript and React js to develop
                features for both mobile and desktop platforms. <br />
                ● Designed and updated layouts to meet usability and performance
                requirements.
                <br /> ● Made recommendations for new technology integration
                based on suitability and alignment to business goals.
                <br /> ● Develop new user-facing features and define the
                appearance and functionality of the site.
                <br /> ● Bridge the gap between graphic design and technical
                implementation.
                <br /> ● Validate input before submitting to the back end.
                <br /> ● Addressed and fixed complex bugs.
                <br /> ● Coded software updates and alterations based on
                detailed design specifications.
                <br /> ● Planned, developed, tested, deployed and maintained web
                applications.
                <br /> ● Worked well independently and within a team setting.
              </small>{" "}
              <br />
            </div>

            {/* job 2 */}
            <h5>Software engineer </h5>
            <strong>
              Flairstech{" "}
              <strong className="placeanddate">
                Cairo, Egypt 03/2019 - 10/2019
              </strong>
            </strong>
            <div>
              <small>
                ● Assisted in requirements analysis, High Level Design, Low
                Level Design, and complex code development for 15+ applications.
                <br />● Provided technical direction and system architecture for
                50+ individual initiatives.
                <br />● Attended 20+ weekly standup meetings to receive weekly
                tasks and mentorship from senior developers
                <br />● Collaborated with external programmers to coordinate
                delivery of 6 new software applications.
                <br />● Implemented and updated application modules under the
                direction of Senior Software Developers.
                <br />● Collaborated productively with the product team to
                understand requirements and business specifications around
                portfolio management, analytics and risk.
                <br />● Developed and presented findings and solutions to
                audiences including senior executives and stakeholders.
                <br />● Followed policies and procedures related to application
                methods and quality standards at all times.
                <br />● Effectively translated client requirements into
                application designs and systems requirements.
              </small>
              <br />
            </div>
            {/* job 3 */}
            <h5>Business Owner/Operations manager </h5>
            <strong>
              Farhana English Community{" "}
              <strong className="placeanddate">
                Cairo, Egypt 03/2019 - 10/2019
              </strong>
            </strong>
            <div>
              <small>
                ● Managed day-to-day business operations.
                <br />● Recruited teachers and students to increase our impact
                and provided guidance to teachers and students.
                <br />● Started with 20 students and 4 teachers, in one-year
                increased enrollment to 200+ students and 30 teachers.
                <br />● Trained and motivated employees to perform daily
                business functions.
              </small>{" "}
              <br />
            </div>
            {/* job 4 */}
            <h5>Junior web developer</h5>
            <strong>
              CLS Learning solutions{" "}
              <strong className="placeanddate">
                Cairo, Egypt 03/2019 - 10/2019
              </strong>
            </strong>
            <div>
              <small>
                ● Worked as a productive and positive team member to design,
                code, test, report, and debug operations.
                <br />● Managed front-end and back-end development in the
                company's Portfolio Analyst, Employee Track, and Account
                Management systems.
                <br />● Successfully identified, diagnosed, and fixed website
                problems, including broken links, typographical errors, and
                formatting issues.
                <br />● Helped to achieve a consistent look and visual theme
                across the website by promoting uniform fonts, formatting,
                images, and layout.
                <br />
                ●Evaluated and became knowledgeable in new standards,
                technologies, and trends in website development.
              </small>{" "}
              <br />
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
