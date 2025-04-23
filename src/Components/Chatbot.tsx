import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css';

interface FormData {
  pregnancies: number;
  glucose: number;
  bloodPressure: number;
  skinThickness: number;
  insulin: number;
  bmi: number;
  diabetesPedigreeFunction: number;
  paresthesia: boolean;
  consumesToxins: boolean;
  muscleWeakness: boolean;
  sensitivityToTouch: string;
  age: number;
}

interface ChatbotProps {
  formData: FormData;
  autoDiagnose?: boolean;
}

const Chatbot: React.FC<ChatbotProps> = ({ formData, autoDiagnose = false }) => {
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Explicitly set the sender type as "user" for the original input
    const newMessages = [...messages, { sender: 'user' as 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    try {
      // Send the user message and formData to backend
      const res = await axios.post('http://localhost:5000/chat', { message: input, formData });

      // Extract prediction and explanation from response
      const { prediction, explanation } = res.data;

      // Add prediction and explanation messages to chat
      setMessages(prevMessages => [
        ...prevMessages,
        { sender: 'bot', text: `Prediction: ${prediction}` },
        { sender: 'bot', text: `Explanation: ${explanation}` },
      ]);
    } catch (err) {
      setMessages(prevMessages => [...prevMessages, { sender: 'bot' as 'bot', text: 'Error connecting to Gemini AI.' }]);
    }
  };

  React.useEffect(() => {
    if (autoDiagnose) {
      // Send the diabetic neuropathy diagnostic message automatically
      const sendDiagnostic = async () => {
        try {
          // Send formData with a diagnostic message to backend
          const diagnosticMessage = "Please provide a diabetic neuropathy diagnosis based on the form data.";
          setMessages([{ sender: 'user', text: diagnosticMessage }]);

          const res = await axios.post('http://localhost:5000/chat', { message: diagnosticMessage, formData });

          const { prediction, explanation } = res.data;

          setMessages([
            { sender: 'user', text: diagnosticMessage },
            { sender: 'bot', text: `Prediction: ${prediction}` },
            { sender: 'bot', text: `Explanation: ${explanation}` },
          ]);
        } catch (err) {
          setMessages([{ sender: 'bot', text: 'Error connecting to Gemini AI.' }]);
        }
      };

      sendDiagnostic();
    }
  }, [autoDiagnose, formData]);

  const chatWindowRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chatbot">
      <div className="chat-window" ref={chatWindowRef}>
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.sender}`}>
            <strong>{msg.sender === 'user' ? 'You' : 'Gemini'}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
          placeholder="Ask me anything..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
