import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import medicalBackground from '../assets/medical-background.jpg';
const HomePage = () => {
    const navigate = useNavigate();
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
        }, children: _jsxs("div", { className: "container", children: [_jsx("h1", { children: "Home Page" }), _jsx("p", { children: "Welcome to the AI-Driven Classification of Diabetic Neuropathy Subtypes Using Ensemble Learning and Explainable Models." }), _jsx("button", { onClick: () => navigate('/login'), children: "Go to Login" })] }) }));
};
export default HomePage;
//# sourceMappingURL=HomePage.js.map