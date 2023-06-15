import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    isVisible: false,
    email: null,
    onSuccessAction: null
}

const verifyEmailModalSlice = createSlice({
  name: 'verifyEmailModal',
  initialState,
  reducers: {
    showVerifyEmailModal(state, action) {
        state.isVisible = true;
        state.email = action.payload.email;
    },
    hideVerifyEmailModal(state, action){
        state.isVisible = false;
        state.email = null;
    }
  }
})

export const { showVerifyEmailModal, hideVerifyEmailModal } = verifyEmailModalSlice.actions

export default verifyEmailModalSlice.reducer