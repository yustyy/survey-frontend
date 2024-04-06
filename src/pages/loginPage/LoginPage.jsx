import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './loginPage.css'; // Import CSS file
import logo from '../../assets/logo.png';
import AuthService from '../../services/AuthService';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  let authService = new AuthService();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.generateToken(username, password);
      if (response.data.success) {
        document.cookie = `token=${response.data.data}`; // Store the token in a cookie
      }
      
       
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
      
      <form onSubmit={handleLogin} >
        <div className='form-container'>
        <h2>Giriş Yap</h2>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
