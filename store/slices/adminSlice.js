import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    societyName: "",
    token: "",
    isLoggedIn: false,
  },
  reducers: {
    setAdminData: (state, action) => {
      state.societyName = action.payload.societyName;
      state.token = action.payload.token;
      state.isLoggedIn = action.payload.loggedIn;
    },
    setLoggedOut: (state) => {
      state.societyName = "";
      state.token = "";
      state.isLoggedIn = false;
    },
  },
});

export const { setAdminData, setLoggedIn } = adminSlice.actions;
export default adminSlice.reducer;
