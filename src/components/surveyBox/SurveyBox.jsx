import React from 'react'
import './surveyBox.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import DeleteSurveyModal from '../../pages/deleteSurveyModal/DeleteSurveyModal'


const SurveyBox = ({ survey}) => {
  const navigate = useNavigate();

  const [isDeleteSurveyModalOpen, setIsDeleteQuestionModalOpen] = useState(false);

  const handeSurveyDetailsClick = () => {
    navigate(`/surveys/${survey.surveyLink}`); 
  }

  const handleGetSurveyLink = () => {
    navigator.clipboard.writeText(`https://survey-frontend-opal.vercel.app/solveSurvey/${survey.surveyLink}`)
    alert('Anket linki kopyalandı')
  }


  const handleOpenDeleteSurveyModal = () => {
    setIsDeleteQuestionModalOpen(true);
  }

  const handleCloseDeleteSurveyModal = () => {
    setIsDeleteQuestionModalOpen(false);
  }

 

  return (
    <div className='survey'>
     <div className='survey-container'>
        <div className='survey-name'>
            <h3>Anket adı: {survey.name}</h3>
        </div>
        <div className='survey-question-count'>
            <h3>Soru sayısı: {survey.questions.length}</h3>
        </div>

     </div>


      <div className='survey-buttons'>

      <div className='survey-view-button'>
            <button type='button' onClick={handeSurveyDetailsClick}>Detaylar</button>
        </div>

        <div className='survey-get-link-button'>
            <button type='button' onClick={handleGetSurveyLink}>Anket Linkini Kopyala</button>
        </div>

        <div className='survey-delete-button'>
            <button type='button' onClick={handleOpenDeleteSurveyModal}>Anketi Sil</button>
        </div>

      </div>

      {isDeleteSurveyModalOpen && <DeleteSurveyModal survey={survey} closeModal={handleCloseDeleteSurveyModal} />}


    


    </div>
  )
}

export default SurveyBox