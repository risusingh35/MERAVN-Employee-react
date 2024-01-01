import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
  status: 'idle',
};

export const accessTokenSlice = createSlice({
  name: 'accessToken', // Rename the slice to accessToken
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setAccessToken } = accessTokenSlice.actions;
export const selectAccessToken = (state) => state.accessToken.value; 
export default accessTokenSlice.reducer;
