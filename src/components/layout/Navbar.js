import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleTheme }) => {
    return (
        <nav className="navbar bg-success">
            <h1>
                <i className="fab fa-github">GitHub Finder</i>
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <button onClick={toggleTheme}>Toggle Theme</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
