import axios from 'axios';

const API = axios.create({
    baseURL: "https://api.weatherapi.com/v1/",
});

export default API;