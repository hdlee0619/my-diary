import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface PostState {
  post: PostType[] | null;
  isLoading: boolean;
  error: string | boolean | null;
  sucsess: null | number;
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
  sucsess: null,
};

export const __getPost = createAsyncThunk('post', async (_, thunkAPI) => {
  try {
    const data = await axios.get(`${process.env.REACT_APP_JSON_SERVER_URL}/post`);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __deletePost = createAsyncThunk('deletpost', async (payload: any, thunkAPI) => {
  try {
    const data = await axios.delete(`${process.env.REACT_APP_JSON_SERVER_URL}/post/${payload}`);
    return thunkAPI.fulfillWithValue(data.status);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __writePost = createAsyncThunk('writepost', async (payload: any, thunkAPI: any) => {
  try {
    await axios.post(`${process.env.REACT_APP_JSON_SERVER_URL}/post`, payload);
    const data = await axios.get('http://localhost:4000/post');
    return thunkAPI.fulfillWithValue(data.status);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __editPost = createAsyncThunk('editpost', async (payload: any, thunkAPI) => {
  try {
    await axios.patch(`${process.env.REACT_APP_JSON_SERVER_URL}/post/${payload.id}`, payload);
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

    builder
      .addCase(__deletePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__deletePost.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.sucsess = action.payload;
      })
      .addCase(__deletePost.rejected, (state, action: any) => {
        state.error = true;
        state.error = action.payload;
      });

    builder.addCase(__writePost.fulfilled, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(__editPost.fulfilled, (state) => {
      state.isLoading = false;
    });
  },
});

export default postSlice.reducer;
