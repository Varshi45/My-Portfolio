import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Projects.css";
import { ProjectsList } from "../../utilities/ProjectsList";

const Projects = ({ sidebarToggle }) => {
  const containerClass = sidebarToggle ? "projects" : "projects-toggled";

  return (
    <div id="project" className={containerClass}>
      <h2 className="text-center">Projects</h2>
      <hr />
      <p className="text-center">Here are my top projects.</p>

      <div className={`row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 projects-list ${sidebarToggle ? '' : 'justify-content-center'}`}>
        {ProjectsList.map((project) => (
          <div key={project._id} className="col">
            <Card className="project-card">
              <Card.Body>
                <Card.Title className="project-title">{project.title}</Card.Title>
                <Card.Text className="project-description">{project.description}</Card.Text>
                <div className="project-techstack mb-3">
                  {project.techstack.map((tech, index) => (
                    <span key={index} className="badge bg-secondary tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <Button className="btn-git me-2" href={project.github} target="_blank">GitHub</Button>
                  <Button className="btn-link" href={project.link} target="_blank">Live</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
