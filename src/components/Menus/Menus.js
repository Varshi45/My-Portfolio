import React from "react";
import "./Menus.css";
import {
  FcAbout,
  FcBusinessman,
  FcHome,
  FcIdea,
  FcAndroidOs,
  FcReading,
  FcBusinessContact,
} from "react-icons/fc";
import { Link } from "react-scroll";

const Menus = ({ sidebar }) => {
  return (
    <div>
      {!sidebar ? (
        <>
          <div className="navbar-profile-pic">
            <img src="/Profile.png" alt="profile-pic" />
          </div>
          <div className="navbar-items">
            <div className="navbar-item">
              <div className="navbar-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome />
                  Home
                </Link>
              </div>
              <div className="navbar-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout />
                  About
                </Link>
              </div>
              <div className="navbar-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcReading />
                  Education
                </Link>
              </div>
              <div className="navbar-link">
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAndroidOs />
                  Tech Stack
                </Link>
              </div>
              <div className="navbar-link">
                <Link
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBusinessman />
                  Work Experience
                </Link>
              </div>
              <div className="navbar-link">
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcIdea />
                  Projects
                </Link>
              </div>
              <div className="navbar-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBusinessContact />
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="navbar-items">
          <div className="navbar-item">
            <div className="navbar-link">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcHome title="Home" />
              </Link>
            </div>
            <div className="navbar-link">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcAbout title="About" />
              </Link>
            </div>
            <div className="navbar-link">
              <Link
                to="education"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcReading title="Education" />
              </Link>
            </div>
            <div className="navbar-link">
              <Link
                to="techstack"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcAndroidOs title="Tech Stack" />
              </Link>
            </div>
            <div className="navbar-link">
              <Link
                to="work"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcBusinessman title="Work Experience" />
              </Link>
            </div>
            <div className="navbar-link">
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcIdea title="Projects" />
              </Link>
            </div>
            <div className="navbar-link">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcBusinessContact title="Contact" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menus;
