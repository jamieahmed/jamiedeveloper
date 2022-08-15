import './App.css';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import About from './Components/About';
import Skill from "./Components/Skills/Skill";
import Projects from './Components/Projects';
import Testimonial from './Components/Testimonial';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
