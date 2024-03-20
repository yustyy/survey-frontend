import axios from 'axios';  

export default class RatingService {

    APILink = "http://localhost:8080/api/questions/";

    addQuestion(surveyId, question){
        return axios.post(this.APILink+"add", {surveyId:surveyId, content:question})
    }

    deleteQuestion(questionId){
        return axios.post(this.APILink+"delete?id="+questionId)
    }

    changeQuestion(questionId, newContent){
        return axios.post(this.APILink+"changeQuestionName?questionId="+questionId+"&newName="+newContent)
    }

}