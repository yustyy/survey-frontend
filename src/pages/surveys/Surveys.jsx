import React, { useEffect, useState } from 'react';
import Survey from '../../components/surveyBox/SurveyBox';
import SurveyService from '../../services/SurveyService';
import AddSurveyModal from '../../pages/addSurveyModal/AddSurveyModal';
import './surveys.css';

const Surveys = () => {
  const [surveys, setSurveys] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        const surveyService = new SurveyService();
        const result = await surveyService.getSurveys();
        if (result.data && result.data.data) {
          setSurveys(result.data.data);
        }
      } catch (error) {
        console.error('Error fetching surveys:', error);
      }
    };

    fetchSurveys();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='survey-container'>
      <button type='button' className='add-new-survey-button' onClick={handleOpenModal}>Yeni Anket ekle</button>
      <div className='surveys'>
        {surveys && surveys.length > 0 ? (
          surveys.map((survey) => <Survey key={survey.id} survey={survey} />)
        ) : (
          <p>Bir anket bulunmuyor!</p>
        )}
      </div>

      {isModalOpen && <AddSurveyModal closeModal={handleCloseModal} />}
    </div>
  );
};

export default Surveys;
