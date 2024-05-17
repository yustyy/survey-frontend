import axios from 'axios';  

const axiosInstance = axios.create({
    baseURL: 'https://backend.yusufacmaci.com/api/auth/',
    withCredentials: true,
  });

export default class AuthService {

    static getHeaders() {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
        return {
            Authorization: `Bearer ${token}` // Token'i Authorization başlığı altında gönder
        };
    }


    generateToken(username, password){
        return axiosInstance.post("generateToken?username="+username+"&password="+password)
    }


}
