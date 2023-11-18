import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import userReducer from "./slices/adminSlice";
import deleteModalReducer from "./slices/deleteModalSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "eventify",
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
  deleteModal: deleteModalReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
