import { FaBuilding, FaGamepad, FaMobileAlt, FaTshirt, FaWallet } from 'react-icons/fa';
import React from 'react';

const ProjectData = [
    {
        id: 1,
        name: 'Messenger App',
        description: 'Mobile application',
        path: '/project',
        icon: <FaMobileAlt />,
        status: 'Completed',
        favourited: true,
    },
    {
        id: 2,
        name: 'Clothing Store',
        description: 'E-commerce',
        path: '/project',
        icon: <FaTshirt />,
        status: 'In progress',
        favourited: true,
    },
    {
        id: 3,
        name: 'Online Bank',
        description: 'E-commerce',
        path: '/project',
        icon: <FaWallet />,
        status: 'In progress',
        favourited: false,
    },
    {
        id: 4,
        name: 'RPG Game',
        description: 'Game',
        path: '/project',
        icon: <FaGamepad />,
        status: 'Off track',
        favourited: false,
    },
    {
        id: 5,
        name: 'My Business',
        description: 'Business',
        path: '/project',
        icon: <FaBuilding />,
        status: 'Off track',
        favourited: false,
    },
]

export default ProjectData;