import axios from 'axios';  

const axiosInstance = axios.create({
    baseURL: 'https://devrim-backend.onrender.com/api/surveys/',
    withCredentials: true,
  });

export default class SurveyService {

    static getHeaders() {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
        return {
            Authorization: `Bearer ${token}` // Token'i Authorization başlığı altında gönder
        };
    }
    

    getSurveys(){
        return axiosInstance.get("getAllSurveys", { headers: SurveyService.getHeaders() })
    }

    getSurveyBySurveyLink(surveyLink){
        return axiosInstance.get("getSurveyByLink?surveyLink="+surveyLink , { headers: SurveyService.getHeaders() })    
    }

    changeSurveyName(surveyId, newName){
        return axiosInstance.post("changeSurveyName?surveyId="+surveyId+"&newName="+newName, {}, { headers: SurveyService.getHeaders() })
    }

    addSurvey(surveyName){
        return axiosInstance.post("add", {name:surveyName}, { headers: SurveyService.getHeaders() })
    }

    deleteSurvey(surveyId){
        return axiosInstance.delete("delete?id="+surveyId, { headers: SurveyService.getHeaders() })
    }

    getSurveyQuestionsByLink(surveyLink){
        return axiosInstance.get("getSurveyQuestionsByLink?surveyLink="+surveyLink)
    }
    
    checkIfUserSubmittedSurveyBefore(surveyLink){
        return axiosInstance.get("checkIfUserSubmittedSurveyBefore?surveyLink="+surveyLink)
    }
}