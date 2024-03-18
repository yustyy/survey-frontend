import axios from 'axios';  

export default class SurveyService {

    APILink = "http://localhost:8080/api/surveys/"

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
}