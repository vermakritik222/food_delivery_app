import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  oder: {},
};

export const currentOderSlice = createSlice({
  name: "toggler",
  initialState,
  reducers: {
    setOder: (state, action) => {
      const oder = action.payload;
      state.oder = oder;
    },

    clear: (state, action) => {
      state.oder = {};
    },
  },
});

export const { setOder, clear } = currentOderSlice.actions;

export default currentOderSlice.reducer;
