import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { signin } from '../../data/users'

const initialState = {
  user: null,
  loading: false,
  error: '',
}

export const signinAsync = createAsyncThunk(
  'signin',
  async ({ email, password }, store) => {
    // paremeter store ใช้สำหรับ store.dispatch
    try {
      const user = await signin(email, password)
      // return ไปยัง action.payload
      return user
    } catch (error) {
      // return ไปยัง action.error
      throw error
    }
  }
)

// status ที่ createAsyncThunk สร้างให้เรา
// signinAsync.pending (loading), signinAsync.fulfilled (success), signinAsync.rejected (fail)

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    signout: (state, action) => {
      state.user = null
      state.loading = false
      state.error = ''
    },
  },
  extraReducers: {
    [signinAsync.pending]: (state, action) => {
      state.loading = true
      state.error = ''
    },
    [signinAsync.fulfilled]: (state, action) => {
      state.user = action.payload
      state.loading = false
      state.error = ''
    },
    [signinAsync.rejected]: (state, action) => {
      state.user = null
      state.loading = false
      state.error = action.error.message
    },
  },
})

// Action creators (auto ไม่ต้องเขียนเอง)
export const { signout } = authSlice.actions

// Reducer
export default authSlice.reducer
