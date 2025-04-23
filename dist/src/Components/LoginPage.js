import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
const LoginPage = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const handleLogin = (event) => {
        event.preventDefault();
        const defaultPassword = '123';
        if (password === defaultPassword) {
            navigate('/data-entry');
        }
        else {
            alert('Incorrect password');
        }
    };
    return (_jsx("div", { className: "background", children: _jsxs("div", { className: "login-container", children: [_jsx("h1", { children: "Login Page" }), _jsxs("form", { onSubmit: handleLogin, children: [_jsxs("label", { children: ["Password:", _jsx("input", { type: "password", name: "password", value: password, onChange: (e) => setPassword(e.target.value) })] }), _jsx("br", {}), _jsx("button", { type: "submit", children: "Login" })] }), _jsx("button", { onClick: () => navigate('/'), children: "Go to Home" })] }) }));
};
export default LoginPage;
//# sourceMappingURL=LoginPage.js.map