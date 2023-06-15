import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    isVisible: false,
    email: null,
    onSuccessAction: null
}

const registerModalSlice = createSlice({
  name: 'registerModal',
  initialState,
  reducers: {
    showRegisterModal(state, action) {
        state.isVisible = true;
        state.email = action.payload && action.payload.email;
    },
    hideRegisterModal(state, action){
        state.isVisible = false;
    }
  }
})

export const { showRegisterModal, hideRegisterModal } = registerModalSlice.actions

export default registerModalSlice.reducer