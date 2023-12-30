import axios from '../config/axiosConfig';
export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const postData = async (endpoint, data) => {
  try {
    const response = await axios.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

// Add more functions for different types of API calls (PUT, DELETE, etc.) as needed
