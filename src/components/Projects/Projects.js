import React from 'react';
import { projects } from './constants';
import Project from './Project';
import './Projects.scss';

const Projects = () => {
  return (
    <div className="projects">
      <div className='projects__title-cont'>
        <h1>PORTFOLIO</h1>
      </div>
      <ul>
        {projects.map(project => (
          <Project {...project} key={project.type} />
        ))}
      </ul>
    </div>
  );
};


export default Projects;