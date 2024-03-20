import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './loginPage.css'; // Import CSS file
import logo from '../../assets/logo.png';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://devrim-backend.onrender.com/api/auth/generateToken', null, {
        params: {
          username: username,
          password: password
        }
      });
      
      const token = response.data.data;
      console.log('Token:', token);
      document.cookie = `token=${token}; path=/; secure; samesite=None;`;
      navigate('/surveys'); // Redirect to the admin panel
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="logo-container">
          <img src={logo} alt="Logo" />
      </div>
      <h2>Giriş Yap</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
