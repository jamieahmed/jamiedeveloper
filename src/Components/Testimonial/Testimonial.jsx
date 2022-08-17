import React, { useState } from "react";
import testimonialData from "./TestimonialData";
import "./style.css";

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  function handlePrevious() {
    if (index > 0) setIndex(index - 1);
  }
  function handleNext() {
    if (index < testimonialData.length - 1) setIndex(index + 1);
  }

  let person = testimonialData[index];
  return (
    <div id="Testimonial">
      <h2 className="testimonial">Testimonials</h2>
      <div className="card-contanier">
        <p className="length-of-index">
          ({index + 1} of {testimonialData.length})
        </p>
        <img src={person.picture} alt="" className="review-jamie-pic" />
        <h2 id="person-name">{person.name}</h2>
        <h4 id="person-postion">"{person.role}"</h4>
        <p id="person-description"> "{person.description}</p>
        <button className="previos" onClick={handlePrevious}>
          &laquo; Previous
        </button>
        <button className="next" onClick={handleNext}>
          Next &raquo;
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
