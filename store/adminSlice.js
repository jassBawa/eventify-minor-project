import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    name: "",
    email: "",
    isLoggedIn: false,
  },
  reducers: {
    setAdminData: (state, action) => {
      state.isLoggedIn = action.payload.loggedIn;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    setLoggedOut: (state) => {
      state.isLoggedIn = false;
      state.name = "";
      state.email = "";
    },
  },
});

export const { setAdminData, setLoggedIn } = adminSlice.actions;
export default adminSlice.reducer;
