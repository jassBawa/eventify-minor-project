import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import adminReducer from "./adminSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    admin: adminReducer,
  },
});
