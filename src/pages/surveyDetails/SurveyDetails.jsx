import React, { useState } from 'react';
import './surveyDetails.css';
import QuestionDetail from '../../components/questionDetail/QuestionDetail';
import NameModal from '../changeSurveyNameModal/ChangeSurveyNameModal';
import { useEffect } from 'react';
import SurveyService from '../../services/SurveyService';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AddQuestionModal from '../addQuestionModal/AddQuestionModal';

const SurveyDetails = () => {
  const [isNameModalOpen, setIsNameModalOpen] = useState(false);
  const [isAddQuestionModalOpen, setIsAddQuestionModalOpen] = useState(false);

  const [survey, setSurvey] = useState({});
  const { surveyLink } = useParams();
  const navigate = useNavigate();

  const openNameModal = () => {
    setIsNameModalOpen(true);
  };

  const closeNameModal = () => {
    setIsNameModalOpen(false);
  };

  const handleOpenAddQuestionModal = () => {
    setIsAddQuestionModalOpen(true);
  };

  const handleCloseAddQuestionModal = () => {
    setIsAddQuestionModalOpen(false);
  };

  const goBack = () => {
    navigate(`/surveys/`);
  };

 




  useEffect(() => {
    let surveyService = new SurveyService();
    surveyService
    .getSurveyBySurveyLink(surveyLink)
      .then((result) => setSurvey(result.data.data));
  }, []);

  return (
    <div className='survey-details'>
      <button className="go-back-button" onClick={goBack}>Geri</button>
      <div className='survey-details-container'>
        <div className='survey-details-name'>
          <h3>Anket adı: {survey.name}</h3>
        </div>
        <div className='survey-details-question-count'>
          <h3>Soru Sayısı: {survey.questions?.length}</h3>
        </div>
        <div className='survey-details-view-button'>
          <button type='button' onClick={openNameModal}>Anket adını değiştir</button>
          <button className="add-question-button" onClick={handleOpenAddQuestionModal}>Soru Ekle</button>
        </div>
      </div>

      <div className='questions'>
     {survey.questions?.map((question) => (
       <QuestionDetail key={question.id} question={question} />
      ))}
      </div>

      {/* Modal'ı render etmek için */}
      {isNameModalOpen && <NameModal closeNameModal={closeNameModal} surveyId={survey.id} />}

      {isAddQuestionModalOpen && <AddQuestionModal closeModal={handleCloseAddQuestionModal} surveyId={survey.id} />}
      
    </div>
  );
}

export default SurveyDetails;
