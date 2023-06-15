import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'src/utils/axiosBackend';

const initialState = {
  user: null,
  isAuthenticated : false,
  isLoading: true,
}

export const login = createAsyncThunk('auth/login', async ({email, password},  { rejectWithValue }) => {
  try{
    const response = await axios.post('/user/login', { email, password });
    return response.data;
  } catch(err){
    return rejectWithValue(err.response.data);
  }
})


export const getProfile = createAsyncThunk('auth/get-profile', async (_, {rejectWithValue})=> {
  try {
    const token = localStorage.getItem('token');
    console.log(response);
    if (token) {
      const response = await axios.get('/user/profile', {
          headers: {
              Authorization: token
          }
      })
      console.log(response);
      return response.data;
    }
  } catch (e) {
    rejectWithValue(e);
  } 
})

export const verifyEmail = createAsyncThunk('auth/verifyEmail', async ({email, code}, {rejectWithValue}) => {
  try{
    const response = await axios.post('user/validate-email', { email, code });
    return response.data;
  } catch(err){
    return rejectWithValue(err.response.data);
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state, action) {
      state.user = null,
      isAuthenticated = false
    },
  },
  extraReducers: {
    [getProfile.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getProfile.fulfilled] : (state, action)=>{
      state.isLoading = false;
      console.log(action);
      // state.user = action.payload.data;
      state.isAuthenticated = true;
    },
    [getProfile.rejected] : (state, action)=>{
      // localStorage.clear();
      console.log(action);
      state.isLoading = false;
    },
    [login.pending]: (state, action) => {
      state.isLoading = true;
    },
    [login.fulfilled] : (state, action)=>{
      const {user, token} = action.payload.data;
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = user;
      localStorage.setItem('token', token)
    },
    [login.rejected] :(state, action)=>{
      state.isLoading = false;
    },
    [verifyEmail.pending]: (state, action) => {
      state.isLoading = true;
    },
    [verifyEmail.fulfilled] : (state, action)=>{
      state.isLoading = false;
    },
    [verifyEmail.rejected] : (state, action)=>{
      state.isLoading = false;
    },
    
  }
})

export const { logout, setLoading } = authSlice.actions

export default authSlice.reducer