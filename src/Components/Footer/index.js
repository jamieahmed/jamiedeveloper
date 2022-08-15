import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import icons
import { MdEmail } from "react-icons/md";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import "./style.css";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // Service ID
        "service_9k8f9im",
        //  Template ID
        "template_avfullm",
        // Public Key
        form.current,
        "ouQ-D65c--mkLg1nm"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("your message sent successfully");
        },
        (error) => {
          console.log(error.text);
          console.log(
            "There was an error,Please check your connection or try again later"
          );
        }
      );
  };
  return (
    <div className="footer" id="ContactMe">
      <div className="footer-container">
        <div className="footer-left">
          <p className="Contact">Contact Me</p>
          <form ref={form} onSubmit={sendEmail}>
            <label>Full Name</label>
            <input
              id="form-input"
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <br />
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <br />
            <label>Phone Number</label>
            <input
              type="tel"
              name="user_phone_number"
              placeholder="your Phone Number"
              required
            />
            <br />
            <label>Country</label>
            <input
              type="text"
              name="user_country"
              placeholder="Your Country"
              required
            />
            <br />
            <label>Message</label>
            <textarea
              id="message"
              name="user_message"
              placeholder="Type your message here!"
              required
            />
            <br />
            <input type="submit" value="Send" />
            <br />
          </form>
        </div>
        <div className="footer-right">
          {/* Title */}
          <p className="Contact">Contact Info</p>

          <div className="contact-info">
            <p className=" contact">
              <MdEmail id="icon-contact" />
              jamieahmed273@gmail.com
            </p>
            <p className="contact">
              <BsTelephoneForwardFill id="icon-contact" />
              +1(732)221-0182
            </p>

            <a className="contact" href="https://goo.gl/maps/1MeUDyYnrnjPxn578">
              <GoLocation id="icon-contact" /> Get Location{" "}
            </a>
          </div>

          {/* Title */}
          <p className="Contact">Social Media</p>
          <div className="social-media-icons">
            <a href="https://www.facebook.com/JAMIEAHMEDIBRAHIM">
              <FaFacebook id="icon-social" />
            </a>
            <a href="https://www.linkedin.com/in/jamie-ahmed-b1841421a/">
              <FaLinkedin id="icon-social" />{" "}
            </a>
            <a href="https://github.com/jamieahmed">
              <FaGithub id="icon-social" />
            </a>
            <a href="https://github.com/jamieahmed">
              <FaWhatsappSquare id="icon-social" />
            </a>
          </div>
        </div>
      </div>
      <p className="footer-company-name">
        © 2022 <i>J</i>amie<i>A</i>hmed. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
