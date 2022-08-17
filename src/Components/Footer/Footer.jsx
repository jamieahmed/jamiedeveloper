import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./style.css";
// import icons
import { MdEmail } from "react-icons/md";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // Service ID
        "service_m1atsmv",
        //  Template ID
        "template_avfullm",
        // Public Key
        form.current,
        "ouQ-D65c--mkLg1nm"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("your message sent successfully");
          setTimeout(() => {
            setMessage();
          }, 3000);
          setMessageColor("green");
        },
        (error) => {
          console.log(error.text);
          setMessage(
            "There was an error,Please check your connection or try again later"
          );
          setTimeout(() => {
            setMessage();
          }, 3000);
          setMessageColor("red");
        }
      );
  };
  return (
    <footer>
      <section className="footer-container">
        <div className="footer-left">
          <p className="Contact">Contact Me</p>
          <strong
            style={{
              backgroundColor: messageColor,
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              color: "white",
              width: "50%",
              margin: " 20px auto",
              padding: "20",
              fontWeight: "bolder",
              borderRadius: "5px",
            }}
          >
            {message}
          </strong>
          <form ref={form} onSubmit={sendEmail} autoComplete="off">
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
          <p className="Contact-right">Contact Info</p>
          <div className="contact-info">
            <p className=" contact">
              <MdEmail id="icon-contact" />
              jamiedeveloper273@gmail.com
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
          <p className="Contact-right-social">Social Media</p>
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
      </section>
      <p className="footer-company-name">
        © 2022 <i>J</i>amie<i>A</i>hmed. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
