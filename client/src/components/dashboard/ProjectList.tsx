import ProjectListData from './ProjectListData';
import { NavLink } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import React from 'react';

const ProjectList = () => {
    return (
        <div className='projects-list'>
            <p className='projects-list-title'>Projects</p>
            {ProjectListData.map((project, index) => {
                return (
                    <NavLink to={project.path} key={index} >
                            <span>{project.name}</span>
                    </NavLink>
                )
            })}
            <div className='divider'></div>
            <div className='btn purple'>
                <span><i><FaPlus /></i> New project</span>
            </div>
            <NavLink className='btn' to='/projects'>
                <span>View all projects</span>
            </NavLink>
        </div>
    )
}

export default ProjectList
