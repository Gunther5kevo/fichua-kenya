// src/pages/CivicEducation.js
import React from 'react';
import '../styles/CivicEducation.css'; 

const CivicEducation = () => {
    return (
        <div className="civic-education">
            <h1>Civic Education on Corruption Laws</h1>
            <p>
                Welcome to the Civic Education section. Here, you can learn about the various anti-corruption laws in Kenya and how they affect you.
            </p>

            <h2>Corruption Offenses</h2>
            <ul>
                <li><strong>Bribery:</strong> Learn about the legal consequences of giving or receiving bribes.</li>
                <li><strong>Embezzlement:</strong> Discover what happens when public officials misuse funds.</li>
                <li><strong>Fraud:</strong> Understanding fraud in public procurement and tender processes.</li>
                {/* Add more laws and offenses */}
            </ul>

            <h2>Your Rights</h2>
            <p>
                Every citizen has the right to report corruption without fear of retaliation. Find out what protections exist for whistleblowers.
            </p>

            <h2>Get Involved</h2>
            <p>
                Learn how you can participate in anti-corruption activities and help create a more transparent government.
            </p>
        </div>
    );
};

export default CivicEducation;
