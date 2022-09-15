import { configureStore } from "@reduxjs/toolkit";
import venderDashboard from "./VenderSlice";
import cart from "./CartSlice";
import user from "./userSlice";
import toggler from "./toggleSlice";
import currentOderSlice from "./currentOderSlice";
import restaurantSlice from "./restaurantSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    authSlice,
    user,
    venderDashboard,
    cart,
    toggler,
    currentOderSlice,
    restaurantSlice: restaurantSlice.reducer,
  },
});
export default store;
