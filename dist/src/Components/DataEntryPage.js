import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DataEntryPage.css';
import medicalBackground from '../assets/medical-background.jpg';
import Chatbot from './Chatbot'; // adjust path if needed
const DataEntryPage = () => {
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
    const handleChange = (e) => {
        const target = e.target;
        let value;
        if (target.type === 'checkbox') {
            value = target.checked;
        }
        else if (target.type === 'number') {
            value = target.value === '' ? "" : Number(target.value);
        }
        else {
            value = target.value;
        }
        setFormData({
            ...formData,
            [target.name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };
    if (submitted) {
        return (_jsx("div", { className: "background", children: _jsxs("div", { className: "container", children: [_jsx("h1", { children: "Thanks for submission!" }), _jsx(Chatbot, {}), _jsx("button", { onClick: () => { setSubmitted(false); }, children: "Edit Submission" }), _jsx("button", { onClick: () => navigate('/'), children: "Go to Home" })] }) }));
    }
    return (_jsx("div", { className: "background", style: {
            backgroundImage: `url(${medicalBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
        }, children: _jsxs("div", { className: "container", children: [_jsx("h1", { children: "Data Entry Page" }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("fieldset", { children: [_jsxs("label", { children: ["Pregnancies:", _jsx("input", { type: "number", name: "pregnancies", value: formData.pregnancies !== undefined && formData.pregnancies !== null ? String(formData.pregnancies) : "", onChange: handleChange, min: "0" })] }), _jsxs("label", { children: ["Glucose:", _jsx("input", { type: "number", name: "glucose", value: formData.glucose !== undefined && formData.glucose !== null ? String(formData.glucose) : "", onChange: handleChange, min: "0" })] }), _jsxs("label", { children: ["Blood Pressure:", _jsx("input", { type: "number", name: "bloodPressure", value: formData.bloodPressure !== undefined && formData.bloodPressure !== null ? String(formData.bloodPressure) : "", onChange: handleChange, min: "0" })] }), _jsxs("label", { children: ["Skin Thickness:", _jsx("input", { type: "number", name: "skinThickness", value: formData.skinThickness !== undefined && formData.skinThickness !== null ? String(formData.skinThickness) : "", onChange: handleChange, min: "0" })] }), _jsxs("label", { children: ["Insulin:", _jsx("input", { type: "number", name: "insulin", value: formData.insulin !== undefined && formData.insulin !== null ? String(formData.insulin) : "", onChange: handleChange, min: "0" })] }), _jsxs("label", { children: ["BMI:", _jsx("input", { type: "number", name: "bmi", value: formData.bmi !== undefined && formData.bmi !== null ? String(formData.bmi) : "", onChange: handleChange, step: "0.1", min: "0" })] }), _jsxs("label", { children: ["Diabetes Pedigree Function:", _jsx("input", { type: "number", name: "diabetesPedigreeFunction", value: formData.diabetesPedigreeFunction !== undefined && formData.diabetesPedigreeFunction !== null ? String(formData.diabetesPedigreeFunction) : "", onChange: handleChange, step: "0.1", min: "0" })] }), _jsxs("label", { children: ["Paresthesia:", _jsx("input", { type: "checkbox", name: "paresthesia", checked: formData.paresthesia, onChange: handleChange })] }), _jsxs("label", { children: ["Consumes Toxins:", _jsx("input", { type: "checkbox", name: "consumesToxins", checked: formData.consumesToxins, onChange: handleChange })] }), _jsxs("label", { children: ["Muscle Weakness:", _jsx("input", { type: "checkbox", name: "muscleWeakness", checked: formData.muscleWeakness, onChange: handleChange })] }), _jsxs("label", { children: ["Sensitivity to Touch:", _jsxs("select", { name: "sensitivityToTouch", value: formData.sensitivityToTouch, onChange: handleChange, children: [_jsx("option", { value: "Extreme", children: "Extreme" }), _jsx("option", { value: "Mild", children: "Mild" }), _jsx("option", { value: "Low", children: "Low" })] })] }), _jsxs("label", { children: ["Age:", _jsx("input", { type: "number", name: "age", value: formData.age !== undefined && formData.age !== null ? String(formData.age) : "", onChange: handleChange, min: "0" })] })] }), _jsx("button", { type: "submit", children: "Submit" })] }), _jsx("button", { onClick: () => navigate('/'), children: "Go to Home" }), _jsx("button", { onClick: () => navigate('/login'), children: "Go to Login" })] }) }));
};
export default DataEntryPage;
//# sourceMappingURL=DataEntryPage.js.map