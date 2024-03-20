import axios from 'axios';  

export default class SurveyService {

    APILink = "https://devrim-backend.onrender.com/api/surveys/"

    getSurveys(){
        return axios.get(this.APILink+"getAllSurveys")
    }

    getSurveyBySurveyLink(surveyLink){
        return axios.get(this.APILink+"getSurveyByLink?surveyLink="+surveyLink)
    }

    changeSurveyName(surveyId, newName){
        return axios.post(this.APILink+"changeSurveyName?surveyId="+surveyId+"&newName="+newName)
    }

    addSurvey(surveyName){
        return axios.post(this.APILink+"add", {name:surveyName})
    }

    deleteSurvey(surveyId){
        return axios.post(this.APILink+"delete?id="+surveyId)
    }

    getSurveyQuestionsByLink(surveyLink){
        return axios.get(this.APILink+"getSurveyQuestionsByLink?surveyLink="+surveyLink)
    }
}