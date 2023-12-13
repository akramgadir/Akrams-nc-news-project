import React from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/Home" className="nav-item">Home</Link>
            <Link to="/Topics" className="nav-item">Topics</Link>
            <Link to="/Articles" className="nav-item">Articles</Link>
        </nav>
    );
}

export default NavBar;
