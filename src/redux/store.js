import { configureStore } from '@reduxjs/toolkit';
import accessTokenReducer from './features/tokenstore/tokenSlice';

export const store = configureStore({
  reducer: {
    accessToken: accessTokenReducer,
  },
});
export default store;
