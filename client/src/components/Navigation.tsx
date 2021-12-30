import ImageLogo from '../assets/img/logo.png';
import { NavLink } from 'react-router-dom';
import NavigationData from './NavigationData';
import React from 'react';

const Navigation = () => {
    return (
        <nav>
            <header>
                <img src={ImageLogo} alt='Logo' className='logo-img'></img>
                <span className='logo-text'>Lative</span>
            </header>
            {NavigationData.map((item, index) => {
                return (
                    <div key={index} className='nav-item'>
                            <NavLink className={({ isActive }) => isActive ? 'nav-icon nav-active' : 'nav-icon'} to={item.path} >
                                <i>{item.icon}</i>
                            </NavLink>
                        <span>{item.title}</span>
                    </div>
                )
            })}
        </nav>
    )
}

export default Navigation;
