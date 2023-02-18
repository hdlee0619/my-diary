import { configureStore } from '@reduxjs/toolkit';
import post from '../modules/post';

const store = configureStore({
  reducer: { post },
});

export default store;
