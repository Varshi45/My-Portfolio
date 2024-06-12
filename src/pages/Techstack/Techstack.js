import React from "react";
import { Card } from "react-bootstrap";
import "./Techstack.css";
import { useTheme } from "../../context/ThemeContext";
import { TechstackList } from "../../utilities/TechstackList";

const Techstack = ({ sidebarToggle }) => {
  const containerClass = sidebarToggle ? "techstack" : "techstack-toggled";
  const [theme] = useTheme();

  const techstackGroupedByType = TechstackList.reduce((acc, tech) => {
    if (!acc[tech.type]) acc[tech.type] = [];
    acc[tech.type].push(tech);
    return acc;
  }, {});

  const renderTechstackSection = (sectionTitle, techList) => (
    <div className="techstack-section" key={sectionTitle}>
      <h3 className="my-3">{sectionTitle}</h3>
      <div className={`row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 techstack-list`}>
        {techList.map((tech) => (
          <div key={tech._id} className="col">
            <Card className="techstack-card text-center">
              <Card.Body>
                <tech.icon className="techstack-icon" style={{ color: theme === "dark" ? "#ff9d00" : "#dc5f00" }} />
                <Card.Title className="techstack-name">{tech.name}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div id="techstack" className={containerClass}>
      <h2 className="text-center">Tech-Stack</h2>
      <hr />

      {Object.keys(techstackGroupedByType).map((type) =>
        renderTechstackSection(type, techstackGroupedByType[type])
      )}
    </div>
  );
};

export default Techstack;
