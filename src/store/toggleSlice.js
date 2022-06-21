import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showWindow: false,
};

export const toggleSlice = createSlice({
  name: "toggler",
  initialState,
  reducers: {
    toggleShowWindow: (state, action) => {
      const toggle = action.payload;
      state.showWindow = toggle;
    },

    default: (state, action) => {
      state.showWindow = false;
    },
  },
});

export const { toggleShowWindow, clear } = toggleSlice.actions;

export default toggleSlice.reducer;
