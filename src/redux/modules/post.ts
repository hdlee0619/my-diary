import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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

export const __getPost = createAsyncThunk('post', async (_, thunkAPI) => {
  try {
    const data = await axios.get('http://localhost:4000/post');
    console.log('__getPost thunk API data.data', data.data);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __deletePost = createAsyncThunk<number, number>('deletpost', async (payload, thunkAPI) => {
  try {
    await axios.delete(`http://localhost:4000/post/${payload}`);

    const data = await axios.get('http://localhost:4000/post');

    console.log('thunk API', thunkAPI.fulfillWithValue(data));

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
        console.log('__getPost fulfilled : ', action.payload);
        state.post = action.payload;
      }) // 일단 any로 처리
      .addCase(__getPost.rejected, (state: any, action) => {
        state.isLoading = false;
        state.error = true;
        state.error = action.payload;
      })
      .addCase(__deletePost.fulfilled, (state, action: any) => {
        state.isLoading = false;
        state.post = action.payload;
      });
  },
});

export default postSlice.reducer;
