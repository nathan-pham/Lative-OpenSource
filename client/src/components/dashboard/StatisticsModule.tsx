import { FaProjectDiagram, FaTasks } from 'react-icons/fa';
import React from 'react';

const StatisticsModule = () => {
    return (
        <>
            <div className='statistic'>
                <div className='statistic-icon'><FaProjectDiagram /></div>
                <div className='statistic-container'>
                    <div className='statistic-stats'>
                        <span className='statistic-title'>Projects</span>
                        <div className='statistic-progression'>
                            <div className='statistic-bar' style={{width: '85%'}}></div>
                        </div>
                    </div>
                    <span className='statistic-percentage'>85%</span>
                </div>
            </div>
            <div className='statistic'>
                <div className='statistic-icon'><FaTasks /></div>
                <div className='statistic-container'>
                    <div className='statistic-stats'>
                        <span className='statistic-title'>Tasks</span>
                        <div className='statistic-progression'>
                            <div className='statistic-bar' style={{width: '68%'}}></div>
                        </div>
                    </div>
                    <span className='statistic-percentage'>68%</span>
                </div>
            </div>
        </>
    )
}

export default StatisticsModule;
