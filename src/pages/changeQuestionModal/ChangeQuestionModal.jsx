import React, { useState } from "react";
import "./changeQuestionModal.css";
import QuestionService from "../../services/QuestionService";


const ChangeQuestionModal = ({ closeModal, questionId }) => {
  const [newName, setNewName] = useState("");

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const questionService = new QuestionService();

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const response = await questionService.changeQuestion(questionId, newName);
      window.location.reload();
      console.error(response.message);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Soruyu Değiştir</h2>
        <form>
          <input
            type="text"
            placeholder="Yeni soruyu girin"
            value={newName}
            onChange={handleChange}
          />
          <div className="change-question-buttons">
            <button
              type="button"
              className="change-question-buttons-button-cancel"
              onClick={closeModal}
            >
              İptal et
            </button>
            <button
              type="submit"
              className="change-question-buttons-button-submit"
              onClick={handleSubmit}
            >
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangeQuestionModal;
