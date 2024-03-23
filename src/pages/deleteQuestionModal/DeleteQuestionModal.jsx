import React from 'react'
import './deleteQuestionModal.css'
import QuestionService from '../../services/QuestionService';

const DeleteQuestionModal = ( {question, closeModal}) => {
  const questionService = new QuestionService();

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const response = await questionService.deleteQuestion(question.id);
      window.location.reload();
      console.error(response.message);
    } catch (error) {
      console.error(error.message);
    }
  }
  


  return (
    <div className="modal-overlay">
    <div className="modal-content">
      <h2>Soruyu silmek istediğinizden emin misiniz?</h2>
      <p>Soru: {question.content}</p>
      <p>Sorunun cevaplanma sayısı: {question.ratings.length}</p>
      <p>Bu işlem geri alınamaz!</p>
      <form>
        <div className="deleteq-buttons">
          <button
            type="submit"
            className="deleteq-button-cancel"
            onClick={closeModal}
          >
            İptal et
          </button>
          <button
            type="button"
            className="deleteq-button-submit"
            onClick={handleSubmit}
          >
            Soruyu Sil
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default DeleteQuestionModal