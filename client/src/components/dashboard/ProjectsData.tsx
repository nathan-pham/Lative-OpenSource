import { FaBuilding, FaGamepad, FaMobileAlt, FaTshirt, FaWallet } from 'react-icons/fa';
import React from 'react';

const ProjectsData = [
    {
        name: 'Messenger App',
        icon: <FaMobileAlt />,
        percentage: '100%',
        path: '/projects/project',
    },
    {
        name: 'Online Bank',
        icon: <FaWallet />,
        percentage: '62%',
        path: '/projects/project',
    },
    {
        name: 'Clothing Store',
        icon: <FaTshirt />,
        percentage: '57%',
        path: '/projects/project',
    },
    {
        name: 'My Bussiness',
        icon: <FaBuilding />,
        percentage: '29%',
        path: '/projects/project',
    },
    {
        name: 'RPG Game',
        icon: <FaGamepad />,
        percentage: '11%',
        path: '/projects/project',
    },
]

export default ProjectsData;