import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DataEntryPage.css';
import medicalBackground from '../assets/medical-background.jpg';
import Chatbot from './Chatbot'; // adjust path if needed


const DataEntryPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    pregnancies: 0,
    glucose: 0,
    bloodPressure: 0,
    skinThickness: 0,
    insulin: 0,
    bmi: 0,
    diabetesPedigreeFunction: 0,
    paresthesia: false,
    consumesToxins: false,
    muscleWeakness: false,
    sensitivityToTouch: 'Mild',
    age: 0
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target;
    let value: string | number | boolean;

    if (target.type === 'checkbox') {
      value = (target as HTMLInputElement).checked;
    } else if (target.type === 'number') {
      value = target.value === '' ? "" : Number(target.value);
    } else {
      value = target.value;
    }

    setFormData({
      ...formData,
      [target.name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="background"
      >
        <div className="container">
          <h1>Thanks for submission!</h1>
          <Chatbot formData={formData} autoDiagnose={true} />
          <button onClick={() => { setSubmitted(false); }}>Edit Submission</button>
          <button onClick={() => navigate('/')}>Go to Home</button>
        </div>
      </div>
    );
  }

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
        <h1>Data Entry Page</h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              Pregnancies:
              <input type="number" name="pregnancies" value={formData.pregnancies !== undefined && formData.pregnancies !== null ? String(formData.pregnancies) : ""} onChange={handleChange} min="0" />
            </label>
            <label>
              Glucose:
              <input type="number" name="glucose" value={formData.glucose !== undefined && formData.glucose !== null ? String(formData.glucose) : ""} onChange={handleChange} min="0" />
            </label>
            <label>
              Blood Pressure:
              <input type="number" name="bloodPressure" value={formData.bloodPressure !== undefined && formData.bloodPressure !== null ? String(formData.bloodPressure) : ""} onChange={handleChange} min="0" />
            </label>
            <label>
              Skin Thickness:
              <input type="number" name="skinThickness" value={formData.skinThickness !== undefined && formData.skinThickness !== null ? String(formData.skinThickness) : ""} onChange={handleChange} min="0" />
            </label>
            <label>
              Insulin:
              <input type="number" name="insulin" value={formData.insulin !== undefined && formData.insulin !== null ? String(formData.insulin) : ""} onChange={handleChange} min="0" />
            </label>
            <label>
              BMI:
              <input type="number" name="bmi" value={formData.bmi !== undefined && formData.bmi !== null ? String(formData.bmi) : ""} onChange={handleChange} step="0.1" min="0" />
            </label>
            <label>
              Diabetes Pedigree Function:
              <input type="number" name="diabetesPedigreeFunction" value={formData.diabetesPedigreeFunction !== undefined && formData.diabetesPedigreeFunction !== null ? String(formData.diabetesPedigreeFunction) : ""} onChange={handleChange} step="0.1" min="0" />
            </label>
            <label>
              Paresthesia:
              <input type="checkbox" name="paresthesia" checked={formData.paresthesia} onChange={handleChange} />
            </label>
            <label>
              Consumes Toxins:
              <input type="checkbox" name="consumesToxins" checked={formData.consumesToxins} onChange={handleChange} />
            </label>
            <label>
              Muscle Weakness:
              <input type="checkbox" name="muscleWeakness" checked={formData.muscleWeakness} onChange={handleChange} />
            </label>
            <label>
              Sensitivity to Touch:
              <select name="sensitivityToTouch" value={formData.sensitivityToTouch} onChange={handleChange}>
                <option value="Extreme">Extreme</option>
                <option value="Mild">Mild</option>
                <option value="Low">Low</option>
              </select>
            </label>
            <label>
              Age:
              <input type="number" name="age" value={formData.age !== undefined && formData.age !== null ? String(formData.age) : ""} onChange={handleChange} min="0" />
            </label>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
        <button onClick={() => navigate('/')}>Go to Home</button>
        <button onClick={() => navigate('/login')}>Go to Login</button>
      </div>
    </div>
  );
};

export default DataEntryPage;
