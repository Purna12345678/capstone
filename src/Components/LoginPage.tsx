import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; 

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    const defaultPassword = '123'; 
    if (password === defaultPassword) {
      navigate('/data-entry');
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div className="background"> 
      <div className="login-container">
        <h1>Login Page</h1>
        <form onSubmit={handleLogin}>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
        <button onClick={() => navigate('/')}>Go to Home</button>
      </div>
    </div>
  );
};

export default LoginPage;

