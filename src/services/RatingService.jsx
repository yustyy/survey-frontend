import axios from 'axios';  

export default class RatingService {

    APILink = "http://localhost:8080/api/ratings/";

    getAverageRatingByQuestionId(questionId){
        return axios.get(this.APILink+"getAverageRatingByQuestionId?questionId="+questionId)
    }

    addRatingList(ratings){
        return axios.post(this.APILink+"addRatingList",ratings)
    }

    getRatingsByQuestionId(questionId){
        return axios.get(this.APILink+"getRatingsByQuestionId?questionId="+questionId)
    }


}