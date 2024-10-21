// src/pages/Home.js
import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import '../styles/Home.css';
import cardImage1 from '../assets/images/card1.jpeg'; 
import cardImage2 from '../assets/images/card2.jpeg'; 
import cardImage3 from '../assets/images/card3.jpeg'; 

const Home = () => {
    return (
        <div className="main-content">
            <section className="welcome-section">
                <h1>Welcome to Fichua Kenya</h1>
                <p>Your platform to report and track corruption cases.</p>
                <Button text="Report a Case" className="primary-btn" />
            </section>

            <section className="cases-section">
                <h2>Latest Corruption Cases</h2>
                <div className="cases-list">
                    <Card
                        title="Case #1: Embezzlement in City Hall"
                        description="A high-ranking official was found diverting funds..."
                        image={cardImage1} // Use the imported image here
                    />
                    <Card
                        title="Case #2: Bribery Scandal in Healthcare"
                        description="Doctors are demanding bribes for basic services..."
                        image={cardImage2} // Use the imported image here
                    />
                    <Card
                        title="Case #3: Fraud in Government Contracts"
                        description="Millions were siphoned off in a procurement scam..."
                        image={cardImage3} // Use the imported image here
                    />
                </div>
            </section>
        </div>
    );
};

export default Home;
