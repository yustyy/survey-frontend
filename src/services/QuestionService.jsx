import axios from 'axios';  

const axiosInstance = axios.create({
    baseURL: 'https://backend.yusufacmaci.com/api/questions/',
    withCredentials: true,
  });

export default class QuestionService {

    static getHeaders() {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
        return {
            Authorization: `Bearer ${token}` // Token'i Authorization başlığı altında gönder
        };
    }


    addQuestion(surveyId, question){
        return axiosInstance.post("add", {surveyId:surveyId, content:question}, { headers: QuestionService.getHeaders() })    
    }

    deleteQuestion(questionId){
        return axiosInstance.delete("delete?id="+questionId, { headers: QuestionService.getHeaders() })
    }

    changeQuestion(questionId, newContent){
        return axiosInstance.post("changeQuestionName?questionId="+questionId+"&newName="+newContent, { headers: QuestionService.getHeaders() } )
    }

}
