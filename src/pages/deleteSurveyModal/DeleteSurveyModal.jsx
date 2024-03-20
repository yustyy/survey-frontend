import React from 'react'
import './deleteSurveyModal.css'
import SurveyService from '../../services/SurveyService';

const DeleteSurveyModal = ({survey, handleCloseDeleteSurveyModal}) => {

  const surveyService = new SurveyService();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const response = await surveyService.deleteSurvey(survey.id);
      window.location.reload();
      console.error(response.message);
    } catch (error) {
      console.error(error.message);
    }
  };


  return (
  <div className="modal-overlay">
    <div className="modal-content">
      <h2>Anketi silmek istediğinize emin misiniz?</h2>
      <p>Anket: {survey.name}</p>
      <p>Soru sayısı {survey.questions.length} </p>
      <p>Bu işlem geri alınamaz!</p>
      <form>
        <div className="buttons">
          <button
            type="submit"
            className="button-cancel"
            onClick={handleCloseDeleteSurveyModal}
          >
            İptal et
          </button>
          <button
            type="button"
            className="button-submit"
            onClick={handleSubmit}
          >
            Anketi Sil
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default DeleteSurveyModal