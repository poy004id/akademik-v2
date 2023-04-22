
import { configureStore } from '@reduxjs/toolkit'
import snackbarReducer from './features/snackbar'

export default configureStore({
  reducer: {
    snackbarQueue: snackbarReducer
  }
})