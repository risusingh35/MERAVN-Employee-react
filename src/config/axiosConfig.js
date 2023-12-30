import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://localhost:4000', // Replace with your server's endpoint
  timeout: 5000, // Adjust timeout as needed
  headers: {
    'Content-Type': 'application/json',
  },
});
export default instance;
