import axios from 'axios';
import {  getTokenLocStore} from "./localStorage";
const instance = axios.create({
  baseURL: 'http://localhost:4000', // Replace with your server's endpoint
  timeout: 5000, // Adjust timeout as needed
  headers: {
    'Content-Type': 'application/json',
  },
});
instance.interceptors.request.use(
  (config) => {
    const token = getTokenLocStore();
    if (token) {
      config.headers['Authorization'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default instance;
