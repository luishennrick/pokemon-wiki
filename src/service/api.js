import axios from 'axios';

const api = axios.create({
    baseURL: "https://sheetsu.com/apis/v1.0dh/" 
});



export default api;