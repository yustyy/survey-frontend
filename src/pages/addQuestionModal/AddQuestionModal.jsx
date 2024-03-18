import React from 'react'
import './addQuestionModal.css'
import { useState } from 'react';
import QuestionService from '../../services/QuestionService';

const AddQuestionModal = ({ closeModal, surveyId} ) => {
  const [question, setQuestion] = useState('');

  const handleChange = (e) => {
    setQuestion(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let questionService = new QuestionService();
    questionService.addQuestion(surveyId, question)
    .then(() => {
      window.location.reload();
    });
  }

  return (
    <div className="modal-overlay">
    <div className="modal-content">
      <h2>Yeni Soru Ekle</h2>
      <form>
        <input
          type="text"
          placeholder="Soru girin"
          value={question}
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
            Soru Ekle
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default AddQuestionModal