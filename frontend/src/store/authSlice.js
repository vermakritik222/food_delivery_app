import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: {
    username: "",
    resId: "",
    email: "",
    role: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const user = action.payload;
      console.log(user);
      state.isAuthenticated = true;
      state.user.username = user.name;
      state.user.role = user.role;
      state.user.resId = user.resId;
      state.user.email = user.email;
    },

    clear: (state, action) => {
      state.isAuthenticated = false;
      state.user.username = "";
      state.user.role = "";
      state.user.resId = "";
      state.user.email = "";
    },
  },
});

export const { setAuth, clear } = authSlice.actions;

export default authSlice.reducer;
