// Contact.js
import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import "./Contact.css";
import { FaLinkedin, FaGithub, FaInstagram, FaMedium } from "react-icons/fa"; // Import FaMedium
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ sidebarToggle }) => {
  const containerClass = sidebarToggle ? "contact" : "contact-toggled";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_ngmm8l8";
    const templateId = "template_vobrcrr";
    const publicKey = "8gU34eg837lj2DvlO";

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        toast.success("Email sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  const [theme] = useTheme();

  return (
    <div id="contact" className={containerClass}>
      <ToastContainer
        theme={theme}
      />
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://as2.ftcdn.net/v2/jpg/00/88/74/49/1000_F_88744916_2d10nlc9o5pYt7maCIQjZyePT7zL6Ujz.jpg"
            alt="contact-me"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <div className="contact social-links mb-1">
            <a
              href="https://www.linkedin.com/in/tej-varshith-madala-6b125b245/"
              target="_blank"
              className="me-3"
              rel="noreferrer"
            >
              <FaLinkedin
                size={30}
                color={theme === "dark" ? "#ff9d00" : "#dc5f00"}
              />
            </a>
            <a
              href="https://github.com/Varshi45"
              target="_blank"
              className="me-3"
              rel="noreferrer"
            >
              <FaGithub
                size={30}
                color={theme === "dark" ? "#ff9d00" : "#dc5f00"}
              />
            </a>
            <a
              href="https://www.instagram.com/i_tejvarshith/"
              target="_blank"
              className="me-3"
              rel="noreferrer"
            >
              <FaInstagram
                size={30}
                color={theme === "dark" ? "#ff9d00" : "#dc5f00"}
              />
            </a>
            <a
              href="https://medium.com/@21pa1a0593"
              target="_blank"
              className="me-3"
              rel="noreferrer"
            >
              <FaMedium
                size={30}
                color={theme === "dark" ? "#ff9d00" : "#dc5f00"}
              />
            </a>
          </div>
          <div className="contact">
            <h2 className="text-center">Contact Me</h2>
            <hr />
            <form onSubmit={handleSubmit}>
              <div className="mb-1">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="message" className="form-label">
                  Message:
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="enter your message here"
                  rows="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
