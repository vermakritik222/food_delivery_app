import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resName: "",
  resId: "",
  oder: [],
  oderDetails: [],
  paymentStatus: "unpaid",
  oderName: "Burger",
};

export const activateSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setRestuId: (state, action) => {
      const id  = action.payload;
      state.resId = id;
    },

    setOder: (state, action) => {
      const oder = action.payload;
      state.oder.push(oder);
    },
    setOderDetails: (state, action) => {
      const oderDetails = action.payload;
      state.oderDetails = oderDetails;
    },

    deleteOder: (state, action) => {
      const oderId = action.payload;
      const idx = state.oder.indexOf(oderId);
      if (idx > -1) {
        state.oder.splice(idx, 1);
      }
    },

    clear: (state, action) => {
      state.oder = [];
      state.oderDetails = [];
      state.resId = "";
      state.resName = "";
    },
  },
});

export const { setRestuId, setOder, deleteOder, setOderDetails, clear } =
  activateSlice.actions;

export default activateSlice.reducer;
