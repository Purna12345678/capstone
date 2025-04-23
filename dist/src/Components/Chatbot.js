import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
// src/components/Chatbot.tsx
import { useState } from 'react';
import axios from 'axios';
import './Chatbot.css'; // Optional, for styling
const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const sendMessage = async () => {
        if (!input.trim())
            return;
        // Explicitly set the sender type as "user"
        const newMessages = [...messages, { sender: 'user', text: input }];
        setMessages(newMessages);
        setInput('');
        try {
            const res = await axios.post('http://localhost:5000/chat', { message: input });
            // Explicitly set the sender type as "bot"
            setMessages([...newMessages, { sender: 'bot', text: res.data.response }]);
        }
        catch (err) {
            setMessages([...newMessages, { sender: 'bot', text: 'Error connecting to Gemini AI.' }]);
        }
    };
    return (_jsxs("div", { className: "chatbot", children: [_jsx("div", { className: "chat-window", children: messages.map((msg, i) => (_jsxs("div", { className: `message ${msg.sender}`, children: [_jsxs("strong", { children: [msg.sender === 'user' ? 'You' : 'Gemini', ":"] }), " ", msg.text] }, i))) }), _jsxs("div", { className: "input-area", children: [_jsx("input", { value: input, onChange: (e) => setInput(e.target.value), placeholder: "Ask me anything..." }), _jsx("button", { onClick: sendMessage, children: "Send" })] })] }));
};
export default Chatbot;
//# sourceMappingURL=Chatbot.js.map