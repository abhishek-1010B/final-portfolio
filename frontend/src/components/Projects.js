import React from "react";
import "../styles/projects.css";

const Projects = () => {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <div className="project-box">Ecommerce Website</div>
      <div className="project-box">Tourism Website</div>
      <div className="project-box">Flipkart Clone</div>
      <div className="project-box">Chat Bot</div>
      <div className="project-box">Carbon Footprint</div>
      <div className="project-box">Under Maintenance</div>

      {/* Bubbles */}
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
    </div>
  );
};

export default Projects;
