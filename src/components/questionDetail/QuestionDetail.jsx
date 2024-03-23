import React from "react";
import "./questionDetail.css";
import RatingService from "../../services/RatingService";
import { useEffect, useState } from "react";
import DeleteQuestionModal from "../../pages/deleteQuestionModal/DeleteQuestionModal";
import ChangeQuestionModal from "../../pages/changeQuestionModal/ChangeQuestionModal";
import GetQuestionRatingsModal from "../../pages/getQuestionRatingsModal/GetQuestionRatingsModal";

const QuestionDetail = ({ question } ) => {
  const [rating, setRating] = useState(0);
  const [isDeleteQuestionModalOpen, setIsDeleteQuestionModalOpen] = useState(false);
  const [isChangeQuestionModalOpen, setIsChangeQuestionModalOpen] = useState(false);
  const [isGetQuestionRatingsModalOpen, setIsGetQuestionRatingsModalOpen] = useState(false);


  const handleOpenDeleteQuestionModal = () => {
    setIsDeleteQuestionModalOpen(true);
  }

  const handleCloseDeleteQuestionModal = () => {
    setIsDeleteQuestionModalOpen(false)
  }

  const handleCloseChangeQuestionModal = () => {
    setIsChangeQuestionModalOpen(false)
  }

  const handleOpenChangeQuestionModal = () => {
    setIsChangeQuestionModalOpen(true)
  }

  const handleCloseGetQuestionRatingsModal = () => {
    setIsGetQuestionRatingsModalOpen(false)
  }

  const handleOpenGetQuestionRatingsModal = () => {
    setIsGetQuestionRatingsModalOpen(true)
  }


  useEffect(() => {
    let ratingService = new RatingService();
    ratingService
    .getAverageRatingByQuestionId(question.id)
      .then((result) => setRating(result.data.data));
  }, []);


  return (
    <div className="question-detail-cover">
      <div className="question-detail-name">
        <h3>{question.content}</h3>
      </div>
      <div className="question-avg-rate">
        <h3>Ortalama puan: {rating}</h3>
      </div>

      <div className="question-avg-rate">
        <h3>Cevap sayısı: {question.ratings.length}</h3>
      </div>

      <div className="question-detail-buttons">
      <button type="button" onClick={handleOpenGetQuestionRatingsModal}>Soru cevap detaylarını getir</button>

        <button type="delete" onClick={handleOpenChangeQuestionModal}>Soruyu değiştir</button>

        <button type="button" onClick={handleOpenDeleteQuestionModal}>Soruyu sil</button>
      </div>

      {isDeleteQuestionModalOpen && <DeleteQuestionModal question={question} closeModal={handleCloseDeleteQuestionModal} />}

      {isChangeQuestionModalOpen && <ChangeQuestionModal questionId={question.id} closeModal={handleCloseChangeQuestionModal} />}

      {isGetQuestionRatingsModalOpen && <GetQuestionRatingsModal questionId={question.id} closeModal={handleCloseGetQuestionRatingsModal} questionName={question.content} />}


    </div>
  );
};

export default QuestionDetail;
