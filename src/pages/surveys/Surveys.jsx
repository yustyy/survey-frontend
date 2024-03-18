import React from 'react'
import './surveys.css'
import Survey from '../../components/surveyBox/SurveyBox'
import { useEffect, useState } from 'react';
import SurveyService from '../../services/SurveyService';
import AddSurveyModal from '../../pages/addSurveyModal/AddSurveyModal';


const Surveys = () => {

  const [surveys, setSurveys] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal'ın açık/kapalı durumunu tutar


  useEffect(() => {
    let surveyService = new SurveyService();
    surveyService
    .getSurveys()
      .then((result) => setSurveys(result.data.data));
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true); // Modal'ı aç
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Modal'ı kapat
  };

  return (
    <div className='survey-container'>
      <button type='button' className='add-new-survey-button' onClick={handleOpenModal}>Yeni Anket ekle</button>
    <div className='surveys'>
        {surveys.map((survey) => (
          <Survey key={survey.id} survey={survey} />
        ))}
      </div>

      {isModalOpen && <AddSurveyModal closeModal={handleCloseModal} />}


    </div>
     
   

  )
}


export default Surveys