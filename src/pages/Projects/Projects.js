import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import "./Projects.css";
import { ProjectsList } from "../../utilities/ProjectsList";
import { useTheme } from "../../context/ThemeContext";

const Projects = ({ sidebarToggle }) => {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  const [theme] = useTheme();
  const containerClass = sidebarToggle ? "projects" : "projects-toggled";

  const modalStyle = {
    backgroundColor: theme === "dark" ? "#2a2a2a" : "#fff",
    color: theme === "dark" ? "#eeeeee" : "#000",
    borderColor: theme === "dark" ? "#343a40" : "#ccc",
  };

  const modalTitleColor = theme === "dark" ? "#ff9d00" : "#dc5f00";

  return (
    <div id="project" className={containerClass}>
      <h2 className="text-center">Projects</h2>
      <hr />
      <p className="text-center">Here are my top projects.</p>

      <div
        className={`row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 projects-list ${
          sidebarToggle ? "" : "justify-content-center"
        }`}
      >
        {ProjectsList.map((project) => (
          <div key={project._id} className="col">
            <Card className="project-card" onClick={() => handleShow(project)}>
              <Card.Body>
                <Card.Title className="project-title">
                  {project.title}
                </Card.Title>
                <Card.Text className="project-description">
                  {project.description}
                </Card.Text>
                <div className="project-techstack mb-3">
                  {project.techstack.map((tech, index) => (
                    <span key={index} className="badge bg-secondary tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <Button
                    className="btn-git me-2"
                    href={project.github}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub
                  </Button>
                  <Button
                    className="btn-link"
                    href={project.link}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={modalStyle} closeButton>
        <Modal.Title style={{ color: modalTitleColor }}>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={modalStyle}>
          <p>{selectedProject?.description}</p>
          <h5>Tech Stack</h5>
          <ul>
            {selectedProject?.techstack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer style={modalStyle}>
          <Button
            className= "btn-git"
            href={selectedProject?.github}
            target="_blank"
          >
            GitHub
          </Button>
          <Button
            className="btn-link"
            href={selectedProject?.link}
            target="_blank"
          >
            Live
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Projects;
