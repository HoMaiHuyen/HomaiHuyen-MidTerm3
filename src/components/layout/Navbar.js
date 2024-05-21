import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
    return (
        <nav className="navbar bg-success">
            <h1>
                <i className="fab fa-github">GitHub Finder</i>
            </h1>
            <ul>
                <li>
                    <a href="#">Home</a>
                    <a href="/about">About</a>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;