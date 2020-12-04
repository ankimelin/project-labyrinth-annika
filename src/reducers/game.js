import { createSlice } from '@reduxjs/toolkit'

export const game = createSlice({
  name: 'game',
  initialState: {
    username: 0,
    loading: false,
    started: false,
    room: {}
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setStartGame: (state, action) => {
      state.room = action.payload;
      state.started = true;
    },
    setNextRoom: (state, action) => {
      state.room = action.payload
    }
  }
})