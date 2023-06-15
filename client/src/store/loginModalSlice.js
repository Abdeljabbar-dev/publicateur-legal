import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    isVisible: false,
    email: null,
    onSuccessAction: null
}

const loginModalSlice = createSlice({
  name: 'loginModal',
  initialState,
  reducers: {
    showLoginModal(state, action) {
        state.isVisible = true;
        state.email = action.payload && action.payload.email;
    },
    hideLoginModal(state, action){
        state.isVisible = false;
    }
  }
})

export const { showLoginModal, hideLoginModal } = loginModalSlice.actions

export default loginModalSlice.reducer