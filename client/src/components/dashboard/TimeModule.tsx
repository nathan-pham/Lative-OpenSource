import Clock from 'react-live-clock';
import React from 'react';

const TimeModule = () => {
    return (
        <div className='time'>
            <div><span><Clock format={'HH:mm:ss'} ticking={true} /></span></div>
        </div>
    )
}

export default TimeModule;
