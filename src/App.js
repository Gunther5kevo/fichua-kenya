import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Report from './pages/Report';
import About from './pages/About';
import Contact from './pages/Contact';
import CivicEducation from './pages/CivicEducation';
import Health from './pages/Sectors/Health'; 
import Education from './pages/Sectors/Education'; 
import './App.css'; 

const App = () => {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/report" element={<Report />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/civicEducation" element={<CivicEducation />} />
                        {/* Sector pages */}
                        <Route path="/sectors/health" element={<Health />} />
                        <Route path="/sectors/education" element={<Education />} />
                        {/* Add more sector routes here */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
