import React from 'react';
import { NavLink } from 'react-router-dom';

const PrimaryNavigation = () => (
    <nav>
        <ul>
            <li><NavLink exact to="/">Homeddd</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/this/will/404">Broken link</NavLink></li>
        </ul>
    </nav>
);

export default PrimaryNavigation;