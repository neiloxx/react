import axios from 'axios';

export const API_KEY = 'a9aa9685217441b789b30ff7911f73a0';

const axiosInstance = axios.create({
  baseURL: 'https://newsapi.org/',
  timeout: 5000,
});

export default axiosInstance;
