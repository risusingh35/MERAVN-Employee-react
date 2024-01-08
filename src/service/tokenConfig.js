import axios from 'axios';
import {  getTokenLocStore} from "../service/localStorage";
const token=getTokenLocStore()
const setAuthToken = () => {
    console.log('token----setAuthToken',token);
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;