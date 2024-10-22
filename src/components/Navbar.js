import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleDropdownToggle = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Fichua Kenya</Link>
            </div>

            <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                {/* Hamburger Icon */}
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
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
                        </ul>
                    )}
                </li>

                <li><Link to="/civicEducation">Civic Education</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
