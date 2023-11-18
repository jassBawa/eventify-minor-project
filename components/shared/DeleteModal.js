import { closeDeleteModal } from "@/store/slices/deleteModalSlice";
import React from "react";
import { useDispatch } from "react-redux";

function DeleteModal({ deleteId, handleSubmit }) {
  const dispatch = useDispatch();
  return (
    <>
      <div
        id="delete_modal "
        className="absolute top-1/2 left-[30%] max-w-xl opacity-100 z-[99]"
      >
        <div className="bg-white rounded-lg py-12 px-16 shadow-xl opacity-100">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}

            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-4"
              onClick={() => dispatch(closeDeleteModal())}
            >
              <span className="absolute w-5 h-5 p-4 flex items-center hover:bg-gray-300 hover:text-red-600 justify-center rounded-full border-2">
                X
              </span>
            </button>
          </form>
          <h3 className="font-bold text-lg">Confirmat Deletion</h3>
          <p className="text-gray-600">
            Are you sure you want to delete this event?
          </p>
          <div className="flex gap-4 mt-6">
            <button
              className="py-2 px-4 border-gray-600 border rounded hover:bg-gray-100  flex-1 "
              onClick={() => dispatch(closeDeleteModal())}
            >
              No
            </button>

            <button
              className="hover:bg-red-600 py-2 rounded bg-red-400 text-white  flex-1"
              onClick={() => handleSubmit(deleteId)}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteModal;
