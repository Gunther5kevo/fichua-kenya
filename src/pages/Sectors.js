// src/pages/Sectors.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sectors.css'; // Add custom styles for this page if needed

const Sectors = () => {
    return (
        <div className="sectors">
            <h1>Government Sectors Affected by Corruption</h1>
            <p>Select a sector to learn more about specific corruption cases and how they are being addressed.</p>

            <ul>
                <li><Link to="/sectors/health">Health Sector</Link></li>
                <li><Link to="/sectors/education">Education Sector</Link></li>
                <li><Link to="/sectors/infrastructure">Infrastructure Sector</Link></li>
                {/* Add more sectors */}
            </ul>
        </div>
    );
};

export default Sectors;
