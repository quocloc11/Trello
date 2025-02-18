import { configureStore } from '@reduxjs/toolkit'
import { activeBoardReducer } from './activeBoard/activeBoardSlide'
import { userReducer } from './user/userSlice'
export const store = configureStore({
  reducer: {
    activeBoard: activeBoardReducer,
    user: userReducer
  },
})