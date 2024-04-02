import React from 'react';
import './endSurvey.css'; // Import CSS file
import logo from '../../assets/logo.png';

const EndSurvey = () => {
  return (
    <div className="endSurvey-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
        </div>
      <h1>Anket Tamamlandı</h1>
      <p>Anketi tamamladığınız için teşekkürler.</p>
    </div>
  );
};

export default EndSurvey;
