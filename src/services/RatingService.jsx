import axios from 'axios';  

export default class RatingService {

    APILink = "https://devrim-backend.onrender.com/api/ratings/";

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