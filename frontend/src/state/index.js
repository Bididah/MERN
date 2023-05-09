import { createSlice } from "@reduxjs/toolkit";


const initialeState = {
  mode: 'dark',
  user_id: "63701cc1f03239c72c000180"
}

export const globalSlice = createSlice({
  name: "global",
  initialState: initialeState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? 'dark' : 'light'
    },
    setUser: (state, action) => {
      state.user_id = action.payload
      },
    },
  }
)

export const { setMode, setUser } = globalSlice.actions

export default globalSlice.reducer
