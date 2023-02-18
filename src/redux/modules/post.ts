import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const __readPost = createAsyncThunk;

interface PostState {
  post: PostType[] | null;
  isLoading: boolean;
  error: string | boolean | null;
}
interface PostType {
  id: number;
  title: string;
  date: string;
  author: string;
  contents: string;
  weather: string;
}

const initialState: PostState = {
  post: [],
  isLoading: false,
  error: null,
};

export const __getPost = createAsyncThunk('post', async (payload, thunkAPI) => {
  try {
    const data = await axios.get('http://localhost:4000/post');
    console.log(data.data);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getPost.pending, (state) => {
        state.isLoading = true;
      }) //일단 any로 처리
      .addCase(__getPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = action.payload;
      }) // 일단 any로 처리
      .addCase(__getPost.rejected, (state: any, action) => {
        state.isLoading = false;
        state.error = true;
        state.error = action.payload;
      });
  },
});

export default postSlice.reducer;
