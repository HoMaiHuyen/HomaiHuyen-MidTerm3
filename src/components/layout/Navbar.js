import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleTheme }) => {
    return (
        <nav className="navbar bg-success">
            <h1>
                GitHub Finder
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <button className="btn btn-link nav-link" onClick={toggleTheme} >
                        <i className="fas fa-adjust fa-lg"></i>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
