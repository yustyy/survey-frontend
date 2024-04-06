import React, { useState, useEffect } from 'react';
import './solveSurvey.css'; // Import CSS file
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import SurveryService from '../../services/SurveyService';
import RatingService from '../../services/RatingService';

const SolveSurvey = () => {
  const { surveyLink } = useParams(); // Get the surveyLink parameter from the URL
  const [survey, setSurvey] = useState(null);
  const [ratings, setRatings] = useState({}); // Store ratings for each question
  const [isSubmitting, setIsSubmitting] = useState(false); // Flag for submitting state
  const navigate = useNavigate();

  let surveyService = new SurveryService();
  let ratingService = new RatingService();

  useEffect(() => {
    checkUserSubmission();
  }, [surveyLink]);

  const checkUserSubmission = async () => {
    try {
     const response = await surveyService.checkIfUserSubmittedSurveyBefore(surveyLink);
      
      if (response.data.success) {
        navigate('/endSurvey');
      } else {
        fetchSurvey();
      }
    } catch (error) {
      console.error('Error checking user submission:', error);
    }
  };

  const fetchSurvey = async () => {
    try {
      const response = await surveyService.getSurveyQuestionsByLink(surveyLink);
      setSurvey(response.data.data);
      const initialRatings = response.data.data.questions.reduce((acc, question) => {
        acc[question.id] = 0;
        return acc;
      }, {});
      setRatings(initialRatings);
    } catch (error) {
      console.error('Error fetching survey:', error);
    }
  };

  const handleRatingChange = (questionId, rating) => {
    setRatings(prevRatings => ({
      ...prevRatings,
      [questionId]: rating
    }));
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      const ratingsData = Object.keys(ratings).map(questionId => ({
        questionId,
        rating: ratings[questionId]
      }));
      await ratingService.addRatingList(ratingsData);
      console.log('Ratings submitted successfully:', ratingsData);
      // Reset ratings to 0 after submission
      setRatings(Object.fromEntries(Object.keys(ratings).map(questionId => [questionId, 0])));
      // Redirect to the end survey page
      navigate('/endSurvey');
    } catch (error) {
      console.error('Error submitting ratings:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!survey) {
    return <div>Loading...</div>;
  }

  return (
    <body className='point-container-body'>
      <div className="point-container">
        <div className='point-container-logo'>
        <img src="https://i.ibb.co/PtL1n4K/Whats-App-Image-2024-03-16-at-23-16-39-removebg-preview.png" alt="Logo" />
        </div>
      
      <h1 className='point-survey-name'>{survey.surveyName}</h1>
      {survey.questions.map(question => (
        <div key={question.id} className="point-card">
          <div className="point-card-body">
            <div className="point-question">
              <p className="point-question-text">{question.content}</p>
              <div className="point-rating-container">
                {[1, 2, 3, 4, 5].map(starRating => (
                  <span
                    key={starRating}
                    className={`star ${ratings[question.id] >= starRating ? 'selected' : ''}`}
                    onClick={() => handleRatingChange(question.id, starRating)}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      <button className="point-submit-button" onClick={handleSubmit} disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit Ratings'}
      </button>
    </div>
    </body>
  );
};

export default SolveSurvey;