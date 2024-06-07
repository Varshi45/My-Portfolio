import React from "react";
import { Card } from "react-bootstrap";
import "./Techstack.css";
import { useTheme } from "../../context/ThemeContext";
import { TechstackList } from "../../utilities/TechstackList";

const Techstack = ({ sidebarToggle }) => {
  const containerClass = sidebarToggle ? "techstack" : "techstack-toggled";
  const [theme] = useTheme();

  return (
    <div id="techstack" className={containerClass}>
      <h2 className="text-center">Tech-Stack</h2>
      <hr />
      <p className="text-center">
        including programming languages, tools, frameworks, and databases.
      </p>

      <div className={`row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 techstack-list ${sidebarToggle ? '' : 'justify-content-center'}`}>
        {TechstackList.map((tech) => (
          <div
            key={tech._id}
            className="col"
          >
            <Card className="techstack-card text-center">
              <Card.Body>
                <tech.icon
                  className="techstack-icon"
                  style={{ color: theme === "dark" ? "#ff9d00" : "#dc5f00" }}
                />
                <Card.Title className="techstack-name">{tech.name}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techstack;
