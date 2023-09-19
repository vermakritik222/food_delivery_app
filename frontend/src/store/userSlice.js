import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  resId: "",
  email: "",
  role: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;
      console.log(user);
      state.username = user.username;
      state.role = user.role;
      state.resId = user.resId;
      state.email = user.email;
    },

    clear: (state, action) => {
      state.username = "";
      state.role = "";
      state.resId = "";
      state.email = "";
    },
  },
});

export const { setUser, clear } = userSlice.actions;

export default userSlice.reducer;
