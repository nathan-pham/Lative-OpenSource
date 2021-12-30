import { FaStar, FaEllipsisH} from 'react-icons/fa';
import ProjectData from './ProjectData';
import { NavLink } from 'react-router-dom';
import React from 'react';

const ProjectModules = () => {

    const handleClick = (e:any) => {
        if (e.target.id === 'card') {
            return;
        }
        e.preventDefault();
        if (e.target.getAttribute('data-button') === 'favourite'){
            console.log('Favourited project with id of ' + e.target.parentNode.parentNode.parentNode.getAttribute('project-id'));
        } else if (e.target.parentNode.parentNode.getAttribute('data-button') === 'favourite') {
            console.log('Favourited project with id of ' + e.target.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('project-id'));
        }
      }

    return (
        <div className='project-modules'>
            {ProjectData.map((project, index) => {
                return (
                    <NavLink className='project-module' to={project.path} key={index} project-id={project.id} onClick={handleClick} id='card'>
                        <div className='project-module-top'>
                            <span className='project-module-title'>{project.name}</span>
                            <div className='project-module-icon'>{project.icon}</div>
                        </div>
                        <span className='project-module-description'>{project.description}</span>
                        <div className='project-module-bottom'>
                            <div className='label'>{project.status}</div>
                            <div className='project-module-options'>
                                <div className='favourite' data-button='favourite'><FaStar /></div>
                                <div className='more'><FaEllipsisH /></div>
                            </div>
                        </div>
                    </NavLink>
                )
            })}
        </div>
    )
}

export default ProjectModules;
