import React, { useState }  from "react";
import "./MobileNav.css";
import { GiHamburgerMenu } from "react-icons/gi";
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

const MobileNav = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleMenu = () => {
        setOpen(false);
    }


    return (
        <>
        <div className="mobile-nav">
            <div onClick={handleOpen} className="mobile-nav-header">
                <GiHamburgerMenu className="mobile-nav-icon" size={30} />
                <span  className="text-center mobile-nav-title">Tej Varshith</span>
            </div>
            { open && (
                <div className="mobile-nav-menu">
                <div className="navbar-items">
                <div className="navbar-item ">
                  <div className="navbar-link">
                    <Link
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      onClick={handleMenu}
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
                      onClick={handleMenu}
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
                      onClick={handleMenu}
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
                      onClick={handleMenu}
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
                      onClick={handleMenu}
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
                      onClick={handleMenu}
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
                      onClick={handleMenu}
                      duration={100}
                    >
                      <FcBusinessContact />
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
                </div>
            )}
        </div>

        </>
    );
    };


export default MobileNav;