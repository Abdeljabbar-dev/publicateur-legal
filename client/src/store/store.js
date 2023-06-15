import { configureStore } from '@reduxjs/toolkit'
import registerModal from 'src/components/RegisterModal'

import authSlice from './authSlice'
import loginModalSlice from './loginModalSlice'
import verifyEmailModalSlice from './verifyEmailModalSlice'
import registerModalSlice from './registerModalSlice'

const store = configureStore({
  reducer: {
    auth: authSlice,
    loginModal: loginModalSlice,
    verifyEmailModal: verifyEmailModalSlice,
    registerModal: registerModalSlice
  }
})

export default store