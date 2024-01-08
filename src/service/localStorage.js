export const setTokenLocStore = (value) => localStorage.setItem('accessToken', value);
export const getTokenLocStore = () => localStorage.getItem('accessToken');
export const removeTokenLocStore = () => localStorage.removeItem('accessToken');
