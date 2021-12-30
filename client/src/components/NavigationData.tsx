import { FaCog, FaMoon, FaProjectDiagram, FaStream, FaTasks } from 'react-icons/fa';
import React from 'react';

const NavigationData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <FaStream />
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <FaProjectDiagram />
    },
    {
        title: 'Tasks',
        path: '/tasks',
        icon: <FaTasks />
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <FaCog />
    },
    {
        title: 'Theme',
        path: '/theme',
        icon: <FaMoon />
    },
]

export default NavigationData;
