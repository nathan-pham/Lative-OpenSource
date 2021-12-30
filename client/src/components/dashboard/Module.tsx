import React from 'react';

const Module = ({ width, height, title, content, moduleClass }:any) => {
    return (
        <div style={{ width: width, height: height }} className={moduleClass !== undefined ? 'module ' + moduleClass : 'module'}>
            <span className='module-title'>{title}</span>
            {content}
        </div>
    )
}

export default Module;
