import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import medicalBackground from '../assets/medical-background.jpg'; 

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${medicalBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
      }}
    >
      <div className="container">
        <h1>Home Page</h1>
        <p>Welcome to the AI-Driven Classification of Diabetic Neuropathy Subtypes Using Ensemble Learning and Explainable Models.</p>
        <button onClick={() => navigate('/login')}>Go to Login</button>
      </div>
    </div>
  );
};

export default HomePage;
