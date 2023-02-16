import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import tokenReducer from './tokenSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    token: tokenReducer
  },
})