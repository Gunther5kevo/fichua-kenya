// components/Form.js
import React, { useState } from 'react';
import '../styles/Form.css';

const Form = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        report: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ name: '', email: '', report: '' });
    };

    return (
        <form className="report-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="report">Report:</label>
                <textarea name="report" value={formData.report} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn">Submit</button>
        </form>
    );
};

export default Form;
