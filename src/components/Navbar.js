// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Import your styles

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Fichua Kenya</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/report">Report</Link></li>
                
                {/* Sectors Dropdown */}
                <li className="dropdown" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
                    <span>Sectors</span>
                    {dropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><Link to="/sectors/health">Health</Link></li>
                            <li><Link to="/sectors/education">Education</Link></li>
                            <li><Link to="/sectors/infrastructure">Infrastructure</Link></li>
                            {/* Add more sectors as needed */}
                        </ul>
                    )}
                </li>

                <li><Link to="/civic-education">Civic Education</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
