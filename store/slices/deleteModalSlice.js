import { createSlice } from "@reduxjs/toolkit";

const deleteModalSlice = createSlice({
  name: "deleteModal",
  initialState: {
    isDeleteModalOpen: false,
    deleteId: "",
  },
  reducers: {
    openDeleteModal: (state) => {
      state.isDeleteModalOpen = true;
    },
    closeDeleteModal: (state) => {
      state.isDeleteModalOpen = false;
    },
  },
});

export const { openDeleteModal, closeDeleteModal } = deleteModalSlice.actions;
export default deleteModalSlice.reducer;
