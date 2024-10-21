// src/pages/Report.js
import React from 'react';
import Form from '../components/Form';

const Report = () => {
    const handleFormSubmit = (formData) => {
        console.log('Report submitted:', formData);
        // Here you would handle submitting the form data to your backend
    };

    return (
        <div className="report">
            <h1>Submit a Corruption Report</h1>
            <Form onSubmit={handleFormSubmit} />
        </div>
    );
};

export default Report;
