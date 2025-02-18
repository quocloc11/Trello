import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { isEmpty } from 'lodash'
import { API_ROOT } from '~/utils/constants'
import { mapOrder } from '~/utils/sorts'
import { generatePlaceholderCard } from '~/utils/formatters'
import authorizedAxiosInstance from '~/utils/authorizeAxios'

const initialState = {
  currentUser: null
}

export const loginUserAPI = createAsyncThunk(
  'user/loginUserAPI',
  // async (data) => {
  //   console.log('abc', data)
  //   const response = await authorizedAxiosInstance.post(`${API_ROOT}/v1/users/login`, data)
  //   return response.data
  // }

  async (data, { rejectWithValue }) => {
    try {
      const response = await authorizedAxiosInstance.post(`${API_ROOT}/v1/users/login`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  //extrareducers: noi xu ly du lieu bat dong bo
  extraReducers: (builder) => {
    builder.addCase(loginUserAPI.fulfilled, (state, action) => {
      const user = action.payload
      console.log('user', user)
      state.currentUser = user
    })
  }
})

// Action creators are generated for each case reducer function
//export const {  } = userSlice.actions

export const selectCurrentUser = (state) => {
  return state.user.currentUser
}

export const userReducer = userSlice.reducer