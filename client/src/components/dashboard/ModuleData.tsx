import StatisticsModule from './StatisticsModule';
import TimeModule from './TimeModule';
import ProjectsModule from './ProjectsModule';
import React from 'react';

const ModuleData = [
    {
        title: '4 Dec, 2021',
        width: '255px',
        height: '255px',
        class: undefined,
        content: <TimeModule />,
    },
    {
        title: 'Statistics',
        width: '650px',
        height: '255px',
        class: 'stats',
        content: <StatisticsModule />,
    },
    {
        title: 'Projects',
        width: '930px',
        height: '464px',
        class: 'projects',
        content: <ProjectsModule />
    },
]

export default ModuleData;