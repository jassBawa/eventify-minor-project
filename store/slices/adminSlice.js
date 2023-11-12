import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "admin",
  initialState: {
    token: "",
    name: "",
    isAdmin: false,
    isLoggedIn: false,
  },
  reducers: {
    setUserData: (state, action) => {
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.isAdmin = action.payload.isAdmin;
      state.isLoggedIn = action.payload.loggedIn;
    },
    setLoggedOut: (state) => {
      state.token = "";
      state.isLoggedIn = false;
      state.name = "";
    },
  },
});

export const { setUserData, setLoggedOut } = userSlice.actions;
export default userSlice.reducer;
