import { createSlice } from "@reduxjs/toolkit";
import {
  setRestaurant,
  setMenuItems,
  setCurrentItem,
  setToggleBox,
} from "./reducers";

const initialState = {
  restaurant: null,
  menuItems: null,
  currentItem: null,
  toggleBox: false,
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant,
    setMenuItems,
    setCurrentItem,
    setToggleBox,
  },
});

export const restaurantActions = restaurantSlice.actions;

export default restaurantSlice;
