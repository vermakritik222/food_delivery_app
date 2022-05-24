import { configureStore } from "@reduxjs/toolkit";
import venderDashboard from "./VenderSlice";
// import activate from './activateSlice';

export const store = configureStore({
  reducer: { venderDashboard },
});
