import { configureStore } from "@reduxjs/toolkit";
import venderDashboard from "./VenderSlice";
import cart from "./CartSlice";
import user from "./userSlice";
import toggler from "./toggleSlice";
import currentOderSlice from "./currentOderSlice";

const store = configureStore({
  reducer: { venderDashboard, cart, user, toggler, currentOderSlice },
});
export default store;
