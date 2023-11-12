import React from "react";

function DeleteModal({ deleteId, setDeleteModal, handleSubmit }) {
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
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => setDeleteModal(false)}
            >
              X
            </button>
          </form>
          <h3 className="font-bold text-lg">
            Are you sure want to delete this event!
          </h3>
          <p className="">Changes will not be undone</p>

          <button
            className="btn btn-error"
            onClick={() => handleSubmit(deleteId)}
          >
            Confirm
          </button>
        </div>
      </div>
    </>
  );
}

export default DeleteModal;
