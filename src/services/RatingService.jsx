import axios from 'axios';  

export default class RatingService {

    APILink = "http://localhost:8080/api/ratings/";

    getAverageRatingByQuestionId(questionId){
        return axios.get(this.APILink+"getAverageRatingByQuestionId?questionId="+questionId)
    }
}