import React from 'react'
import './app.css'
import { Navbar } from './components'
import Surveys from './pages/surveys/Surveys'
import SurveyDetails from './pages/surveyDetails/SurveyDetails'
import QuestionDetail from './components/questionDetail/QuestionDetail'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const App = () => {
  return (
      <div className="App">
      <Navbar /> 
        <Routes> 
          <Route path="/" element={<Surveys />} /> 
          <Route path="/surveys" element={<Surveys />} />
          <Route path="/surveys/:surveyLink" element={<SurveyDetails />} />
        </Routes>
      </div>
  );
};

export default App