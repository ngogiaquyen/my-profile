import React from 'react';
import './Projects.css';
import image from "../../assets/image.png";
const projects = [
    {
        id: 1,
        name: "Project One",
        description: "This is the first project.",
        url: "https://example.com/project-one",
        github: "https://github.com/ngogiaquyen",
        image: image
    },
    {
        id: 2,
        name: "Project Two",
        description: "This is the second project.",
        url: "https://example.com/project-two",
        github: "https://github.com/ngogiaquyen",
        image: image
    },
    // Add more projects here
];

function Projects() {
    return (
        <div className="project-container">
            {projects.map(project => (
                <div key={project.id} className="project-card">
                    <img src={project.image} alt={project.name} className="project-image"/>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <div className="project-links">
                        <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;
