import React, { useEffect, useMemo, useState } from "react";
import EventTable from "./EventTable";
import { useDispatch, useSelector } from "react-redux";
import { deleteEvent } from "@/services/api";
import { FilterIcon } from "@/assets/Icons";
import { openModal } from "@/store/slices/modalSlice";
import DeleteModal from "../shared/DeleteModal";
import toast from "react-hot-toast";

function EventsList({ events }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteId, setDeleteId] = React.useState(null); // TODO: remove
  const [deleteModal, setDeleteModal] = React.useState(false);
  const token = useSelector((state) => state.user.token);

  //   const { isOpen, operationType, modalData } = useSelector(
  //     (state) => state.modal
  //   );

  const dispatch = useDispatch();

  // Function to handle search input changes
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // TODO: remove
  const filterList = useMemo(() => {
    return events.filter((event) =>
      event.eventName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [events, searchQuery]);

  const handleDelete = async (eventId) => {
    console.log("running delete functions");
    try {
      const response = await deleteEvent(eventId, token);
      if (response) {
        toast.success("Event deleted");
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }

    setDeleteModal(false);
  };

  return (
    <>
      {deleteModal && (
        <>
          {/* <div className="absolute top-0 left-0 h-screen overscroll-contain w-full bg-black/80"></div> */}
          <DeleteModal
            setDeleteModal={setDeleteModal}
            handleSubmit={handleDelete}
            deleteId={deleteId}
          />
        </>
      )}

      <div className="flex justify-between items-center mt-8">
        <div className="w-[50%]">
          <input
            type="text"
            className="w-full border px-4 py-2 rounded-lg"
            placeholder="Search..."
            onChange={handleSearchChange}
            value={searchQuery}
          />
        </div>
        <div className="w-1/3 text-right flex gap-4 justify-end">
          <button
            onClick={() =>
              dispatch(
                openModal({
                  operationType: "CREATE",
                  modalData: {},
                })
              )
            }
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Create
          </button>
        </div>
      </div>
      <div className="mt-4">
        <div className="shadow py-2 overflow-hidden rounded-lg border-b border-gray-200">
          <EventTable
            setDeleteId={setDeleteId}
            filterList={filterList}
            deleteModal={deleteModal}
            setDeleteModal={setDeleteModal}
          />
        </div>
      </div>
    </>
  );
}

export default EventsList;
