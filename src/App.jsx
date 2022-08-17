import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skill from "./Components/Skills/Skill";
import Projects from "./Components/Projects/Projects";
import Testimonial from "./Components/Testimonial/Testimonial";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Testimonial />
      <Footer />
      <p className="footer-company-name">
        © 2022 <i>J</i>amie<i>A</i>hmed. All rights reserved.
      </p>
    </>
  );
};

export default App;
