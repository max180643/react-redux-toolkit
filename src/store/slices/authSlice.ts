import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { signin } from '../../data/users'
import { User } from '../../types'

type AuthState = {
  user: User | null
  // loading: boolean
  // error: string
}

const initialState: AuthState = {
  user: null,
  // loading: false,
  // error: '',
}

// export const signinAsync = createAsyncThunk(
//   'signin',
//   async ({ email, password }: {email: string, password: string}, store) => {
//     // paremeter store ใช้สำหรับ store.dispatch
//     try {
//       const user = await signin(email, password)
//       // return ไปยัง action.payload
//       return user
//     } catch (error) {
//       // return ไปยัง action.error
//       throw error
//     }
//   }
// )

// status ที่ createAsyncThunk สร้างให้เรา
// signinAsync.pending (loading), signinAsync.fulfilled (success), signinAsync.rejected (fail)

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    signout: (state) => {
      state.user = null
      // state.loading = false
      // state.error = ''
    },
  },
  // extraReducers: {
  //   [signinAsync.pending]: (state, action) => {
  //     state.loading = true
  //     state.error = ''
  //   },
  //   [signinAsync.fulfilled]: (state, action) => {
  //     state.user = action.payload
  //     state.loading = false
  //     state.error = ''
  //   },
  //   [signinAsync.rejected]: (state, action) => {
  //     state.user = null
  //     state.loading = false
  //     state.error = action.error.message
  //   },
  // },
  // extraReducers: (builder) => {
  //   builder.addCase(signinAsync.pending, (state) => {
  //     state.loading = true
  //     state.error = ''
  //   })
  //   builder.addCase(signinAsync.fulfilled, (state, action) => {
  //     state.user = action.payload
  //     state.loading = false
  //     state.error = ''
  //   })
  //   builder.addCase(signinAsync.rejected, (state, action) => {
  //     state.user = null
  //     state.loading = false
  //     state.error = action.error.message || ''
  //   })
  // }
})

// Action creators (auto ไม่ต้องเขียนเอง)
export const { signout, setUser } = authSlice.actions

// Reducer
export default authSlice.reducer
