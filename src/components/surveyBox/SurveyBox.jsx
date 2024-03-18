import React from 'react'
import './surveyBox.css'
import { useNavigate } from 'react-router-dom'

const SurveyBox = ({ survey}) => {
  const navigate = useNavigate();

  const handeSurveyDetailsClick = () => {
    
    navigate(`/surveys/${survey.surveyLink}`); 
  }

  const handleGetSurveyLink = () => {
    navigator.clipboard.writeText(`http://localhost:3000/solveSurvey/${survey.surveyLink}`)
    alert('Anket linki kopyalandı')
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

      </div>
       

    


    </div>
  )
}

export default SurveyBox