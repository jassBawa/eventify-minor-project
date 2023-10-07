import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import adminReducer from "./slices/adminSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    admin: adminReducer,
  },
});
