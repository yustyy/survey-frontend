import React, { useEffect, useState } from "react";
import "./getQuestionRatingsModal.css";
import RatingService from "../../services/RatingService";

const GetQuestionRatingsModal = ({ questionId, closeModal, questionName }) => {
  const [ratings, setRatings] = useState([]);
  const ratingService = new RatingService();

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const response = await ratingService.getRatingsByQuestionId(questionId);
        setRatings(response.data.data);
      } catch (error) {
        console.error("Error fetching ratings:", error);
      }
    };

    fetchRatings();
  }, []);


  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Soru Cevap Detayları</h2>
        <p>Soru: {questionName}</p>
        <ul>
          {ratings.map((rating) => (
            <li key={rating.id}>
              <p>Puan: {rating.rating}</p>
              <p>Doldurma tarihi: {rating.submittedAt}</p>
              <p>******************************************</p>
            </li>
          ))}
        </ul>

        <div className="buttons">
          <button type="button" className="button-cancel" onClick={closeModal}>
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetQuestionRatingsModal;
