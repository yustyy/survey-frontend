import React from 'react'
import './addSurveyModal.css'
import SurveyService from '../../services/SurveyService';
import { useState } from 'react';


const AddSurveyModal = ( {closeModal}) => {
  const [surveyName, setSurveyName] = useState("");

  const handleChange = (e) => {
    setSurveyName(e.target.value);
  };

  const surveyService = new SurveyService();

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const response = await surveyService.addSurvey(surveyName);
      window.location.reload();
      console.error(response.message);
    } catch (error) {
      console.error(error.message);
    }
  };



  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Yeni Anket Oluştur</h2>
        <form>
          <input
            type="text"
            placeholder="Anket adı"
            value={surveyName}
            onChange={handleChange}
          />
          <div className="buttons">
            <button
              type="button"
              className="button-cancel"
              onClick={closeModal}
            >
              İptal et
            </button>
            <button
              type="submit"
              className="button-submit"
              onClick={handleSubmit}
            >
              Ekle
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddSurveyModal