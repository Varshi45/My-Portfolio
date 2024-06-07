// About.js

import React from "react";
import "./About.css";

const About = ({ sidebarToggle }) => {
    // console.log(sidebarToggle);
    return (
        <div id="about" className={!sidebarToggle ? "about-toggled" : "about"}>
            <div className="about-content">
                <h1> My-Self </h1>
                <hr />
                <p>
                    I'm a passionate developer with a strong foundation in both front-end and back-end development. I leverage various frameworks and languages to create user-friendly, responsive websites while prioritizing user experience and efficiency. Additionally, I hold a great interest in Machine Learning and NLP, actively participating in projects utilizing these technologies.
                    I am eager to contribute to team projects and continuously evolving as a developer in the dynamic field of web development. Let's build something amazing together!
                </p>
            </div>
        </div>
    );
};

export default About;
