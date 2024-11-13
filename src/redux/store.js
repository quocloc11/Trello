import { configureStore } from '@reduxjs/toolkit'
import { activeBoardReducer } from './activeBoard/activeBoardSlide'
export const store = configureStore({
  reducer: {
    activeBoard: activeBoardReducer
  },
})