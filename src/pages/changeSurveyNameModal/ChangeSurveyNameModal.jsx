import React, { useState } from "react";
import "./changeSurveyNameModal.css";
import SurveyService from "../../services/SurveyService";

const NameModal = ({ closeNameModal, surveyId }) => {
  const [newName, setNewName] = useState("");

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const surveyService = new SurveyService();

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const response = await surveyService.changeSurveyName(surveyId, newName);
      window.location.reload();
      console.error(response.message);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Anket Adını Değiştir</h2>
        <form>
          <input
            type="text"
            placeholder="Yeni adı girin"
            value={newName}
            onChange={handleChange}
          />
          <div className="change-name-buttons">
            <button
              type="button"
              className="button-cancel"
              onClick={closeNameModal}
            >
              İptal et
            </button>
            <button
              type="submit"
              className="button-submit"
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

export default NameModal;
