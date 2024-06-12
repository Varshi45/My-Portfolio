// Home.js

import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Tej-Resume.pdf";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import "./home.css";
import Name from "../Name/Name";

const Home = ({ sidebar }) => {
  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div
        id="home"
        className={`container-fluid ${sidebar ? "home-container-toggled" : "home-container"}`}
      >
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <FaMoon className="moon" size={27} />
          ) : (
            <FaSun className="sun" size={27} />
          )}
        </div>
        <div className="container home-content">
          <Name />
          <h2 className="home-title">And I'm a</h2>
          <h1 className="home-title">
            <Typewriter
              options={{
                strings: [
                  "Programmer!",
                  "Open Source Contributor!",
                  "FullStack Developer!",
                  "PERN Stack Developer!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-buttons">
            <a className="btn btn-cv" href={Resume} download="Tej-Resume.pdf">
              My Resume
            </a>
            <a
              className="btn btn-hire"
              rel="noreferrer"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=9398960414"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
