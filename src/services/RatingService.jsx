import axios from 'axios';  

const axiosInstance = axios.create({
    baseURL: 'https://devrim-backend.onrender.com/api/ratings/',
    withCredentials: true,
  });

export default class RatingService {

    static getHeaders() {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
        return {
            Authorization: `Bearer ${token}` // Token'i Authorization başlığı altında gönder
        };
    }

    getAverageRatingByQuestionId(questionId){
        return axiosInstance.get("getAverageRatingByQuestionId?questionId="+questionId, { headers: RatingService.getHeaders() })
    }

    addRatingList(ratings){
        return axiosInstance.post("addRatingList",ratings)
    }

    getRatingsByQuestionId(questionId){
        return axiosInstance.get("getRatingsByQuestionId?questionId="+questionId, { headers: RatingService.getHeaders() })
    }


}