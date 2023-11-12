import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    operationType: "",
    modalData: {
      eventName: "",
      description: "",
      image: "",
      date: "",
      time: "",
      venue: "",
      eventId: "",
      category: "",
    },
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.operationType = action.payload.operationType;
      state.modalData = action.payload.modalData;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.operationType = "";
      state.modalData = {};
    },
    updateModalData: (state, action) => {
      state.modalData = action.payload;
    },
  },
});

export const { openModal, closeModal, updateModalData } = modalSlice.actions;
export default modalSlice.reducer;
