import React from 'react'
import './App.css'
import { Navbar } from './components'
import Surveys from './pages/surveys/Surveys'
import SurveyDetails from './pages/surveyDetails/SurveyDetails'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SolveSurvey from './pages/solveSurvey/SolveSurvey'
import { useLocation } from 'react-router-dom'
import LoginPage from './pages/loginPage/LoginPage'

const App = () => {

  const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
  const location = useLocation();

  const renderNavbar = () => {
    if (location.pathname.startsWith('/solveSurvey/') || location.pathname.startsWith('/login')) {
      return null;
    }
    return <Navbar />;
  }



  return (
      <div className="App"> 
      {renderNavbar()}
        <Routes> 
          <Route path="*" element={token ? <Navigate to="/surveys" /> : <Navigate to="/login" />} /> 
          <Route path="/surveys" element={token ? <Surveys /> : <Navigate to="/login" />}   />
          <Route path="/surveys/:surveyLink" element={token ? <SurveyDetails /> : <Navigate to="/login" />} />
          <Route path="/solveSurvey/:surveyLink" element={<SolveSurvey />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
  );
};

export default App