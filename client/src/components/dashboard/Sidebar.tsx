import ProjectList from './ProjectList';
import React from 'react';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h1 className='title'>Your dashboard</h1>
            <ProjectList />
        </div>
    )
}

export default Sidebar;
