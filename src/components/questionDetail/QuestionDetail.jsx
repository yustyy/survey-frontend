import React from "react";
import "./questionDetail.css";
import RatingService from "../../services/RatingService";
import { useEffect, useState } from "react";
import DeleteQuestionModel from "../../pages/deleteQuestionModel/DeleteQuestionModel";

const QuestionDetail = ({ question } ) => {
  const [rating, setRating] = useState(0);
  const [isDeleteQuestionModalOpen, setIsDeleteQuestionModalOpen] = useState(false);

  const handleOpenDeleteQuestionModal = () => {
    setIsDeleteQuestionModalOpen(true);
  }

  const handleCloseDeleteQuestionModal = () => {
    setIsDeleteQuestionModalOpen(false)
  }

  useEffect(() => {
    let ratingService = new RatingService();
    ratingService
    .getAverageRatingByQuestionId(question.id)
      .then((result) => setRating(result.data.data));
  }, []);


  return (
    <div className="question-detail">
      <div className="question-name">
        <h3>{question.content}</h3>
      </div>

      <div className="question-answer-count">
        <h3></h3>
      </div>

      <div className="question-avg-rate">
        <h3>Ortalama puan: {rating}</h3>
      </div>

      <div className="question-avg-rate">
        <h3>Cevap sayısı: {question.ratings.length}</h3>
      </div>

      <div className="question-detail-buttons">
      <button type="button">Soru cevap detaylarını getir</button>

        <button type="delete">Soruyu düzenle</button>

        <button type="button" onClick={handleOpenDeleteQuestionModal}>Soruyu sil</button>
      </div>

      {isDeleteQuestionModalOpen && <DeleteQuestionModel question={question} closeModal={handleCloseDeleteQuestionModal} />}
    </div>
  );
};

export default QuestionDetail;
