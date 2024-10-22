// src/pages/Sectors/Health.js
import React from 'react';
import '../../styles/Sectors.css';


const Education = () => {
    return (
        <div className="sector-page">
            <h1>Corruption in the Education Sector</h1>
            <p>
                The Education sector has been plagued by issues such as bribery for faster services, misuse of public funds meant for medical supplies, and fraudulent procurement of healthcare equipment.
            </p>

            <h2>Recent Cases</h2>
            <ul>
                <li><strong>Case 1:</strong> Misuse of COVID-19 funds by hospital administrators.</li>
                <li><strong>Case 2:</strong> Bribery scandal in the allocation of medical contracts.</li>
                {/* Add more cases */}
            </ul>
        </div>
    );
};

export default Education;
