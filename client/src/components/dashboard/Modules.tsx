import ModuleData from './ModuleData';
import Module from './Module';
import React from 'react';

const Modules = () => {
    return (
        <div className='modules'>
            {ModuleData.map((module, index) => {
                return (
                    <Module width={module.width} height={module.height} moduleClass={module.class} title={module.title} content={module.content} key={index}/>
                )
            })}            
        </div>
    )
}

export default Modules
