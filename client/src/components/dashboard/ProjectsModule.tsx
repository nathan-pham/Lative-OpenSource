import { FaPlus } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import ProjectsData from './ProjectsData';
import React from 'react';

const ProjectsModule = () => {
    return (
        <div className='projects-overview'>
            {ProjectsData.map((project, index) => {
                return (
                    <NavLink to={project.path} className='project' key={index}>
                        <div className='project-icon'>{project.icon}</div>
                        <div className='project-name'>{project.name}</div>
                        <span className='project-percentage'>{project.percentage}</span>
                    </NavLink>
                )
            })}
            <NavLink to='projects/new' className='project new-project'>
                <div className='new-project-icon'><FaPlus /></div>
            </NavLink>
        </div>
    )
}

export default ProjectsModule;
