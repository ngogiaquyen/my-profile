import React from 'react';
import './Projects.css';
// import image from '~/assets/image.png';
import ProjectList from '~/component/ProjectItem/ProjectList';
// const projects = [
//   {
//     id: 1,
//     name: 'Project One',
//     description: 'This is the first project.',
//     url: 'https://example.com/project-one',
//     github: 'https://github.com/ngogiaquyen',
//     image: image,
//   },
//   {
//     id: 2,
//     name: 'Project Two',
//     description: 'This is the second project.',
//     url: 'https://example.com/project-two',
//     github: 'https://github.com/ngogiaquyen',
//     image: image,
//   },
//   // Add more projects here
// ];

function Projects() {
  return (
    <div className="project-container">
      <ProjectList />
    </div>
  );
}

export default Projects;
