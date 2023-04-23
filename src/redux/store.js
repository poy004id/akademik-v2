
import { configureStore } from '@reduxjs/toolkit'
import snackbarReducer from './features/snackbar'
import loginReducer from './features/login'

export default configureStore({
  reducer: {
    snackbarQueue: snackbarReducer,
    login: loginReducer
  }
})