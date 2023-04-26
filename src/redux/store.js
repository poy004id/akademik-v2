
import { configureStore } from '@reduxjs/toolkit';
import snackbarReducer from './features/snackbar';
import loginReducer from './features/login';
import alertReducer from './features/alert'

export default configureStore({
  reducer: {
    snackbarQueue: snackbarReducer,
    login: loginReducer,
    alert: alertReducer
  }
})