import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <ul className=' menu '>
            <li>
                <NavLink className={({isActive})=> isActive ? "active menuItem" : 'menuItem'} to="/">Home</NavLink>
            </li>
            <li>
                <NavLink  className={({isActive})=> isActive ? "active menuItem" : 'menuItem'} to="/addUser">ADD USER</NavLink>
            </li>
        </ul>
    );
};

export default Header;