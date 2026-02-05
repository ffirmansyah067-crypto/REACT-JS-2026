// src/features/users/usersSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface User {
  id: number
  name: string
  email: string
}

interface UsersState {
  list: User[]
  loading: boolean
  error: string | null
}

const initialState: UsersState = {
  list: [],
  loading: false,
  error: null,
}

// Async thunk untuk fetch data
export const fetchUsers = createAsyncThunk<User[]>(
  'users/fetchUsers',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) {
      throw new Error('Failed to fetch users')
    }
    return (await response.json()) as User[]
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.list.push(action.payload)
    },
    removeUser: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((u) => u.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false
        state.list = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? 'Unknown error'
      })
  },
})

export const { addUser, removeUser } = usersSlice.actions
export default usersSlice.reducer
