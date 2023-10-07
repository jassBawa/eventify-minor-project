import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

import { createEvent, updateEvent } from "@/services/api";
import { closeModal, updateModalData } from "@/store/slices/modalSlice";

function EventModal({ showModal, setShowModal }) {
  const dispatch = useDispatch();
  const { isOpen, operationType, modalData } = useSelector(
    (state) => state.modal
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleUpdateEvent = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const updatedData = {
      eventName: modalData.eventName,
      description: modalData.description,
      image: modalData.image,
      date: modalData.date,
      time: modalData.time,
      venue: modalData.venue,
    };

    const res = await updateEvent(modalData.eventId, updatedData);

    if (res) {
      toast.success("Event updated!");
      closeModal();
    }

    // Call API to create event here
    setIsSubmitting(false);
  };

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await createEvent({
      eventName: modalData.eventName,
      description: modalData.description,
      image: modalData.image,
      date: modalData.date,
      time: modalData.time,
      venue: modalData.venue,
    });

    toast.success("Event added");

    // Call API to create event here
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    dispatch(
      updateModalData({
        ...modalData,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <>
      {isOpen ? (
        <div
          id="create-event-modal"
          className="modal z-50 fixed w-full py-4 top-0 left-0 flex items-center justify-center"
        >
          <div
            onClick={handleClose}
            className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
          ></div>

          <div className="modal-container bg-white md:max-w-3xl mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
              <div className="headings py-4">
                <h2 className="text-2xl ">
                  {operationType === "CREATE"
                    ? "Create Your Event"
                    : "Update Your Event"}
                </h2>
                <p className="text-sm mt-4 text-gray-400">
                  Description: &quot;Easily create your next event using our
                  form. Fill in all the details you need, from the name to the
                  date, time, venue, rules, and image text. Let&apos;s make your
                  event unforgettable!&quot;
                </p>
              </div>
              <form className="grid grid-cols-2 mt-4 gap-4">
                <div className="">
                  <label
                    className="block font-semibold mb-2"
                    htmlFor="event-name"
                  >
                    Event Name:
                  </label>
                  <input
                    className="w-full border rounded py-2 px-3 mb-3"
                    type="text"
                    id="event-name"
                    name="eventName"
                    required
                    value={modalData.eventName}
                    onChange={handleChange}
                  />
                </div>

                <div className="">
                  <label
                    className="block font-semibold mb-2"
                    htmlFor="event-date"
                  >
                    Date:
                  </label>
                  <input
                    className="w-full border rounded py-2 px-3 mb-3"
                    type="date"
                    id="event-date"
                    name="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    value={modalData.date}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    className="block font-semibold mb-2"
                    htmlFor="event-time"
                  >
                    Time:
                  </label>
                  <input
                    className="w-full border rounded py-2 px-3 mb-3"
                    type="text"
                    id="event-time"
                    name="time"
                    required
                    value={modalData.time}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    className="block font-semibold mb-2"
                    htmlFor="event-venue"
                  >
                    Venue:
                  </label>
                  <input
                    className="w-full border rounded py-2 px-3 mb-3"
                    type="text"
                    id="event-venue"
                    name="venue"
                    required
                    value={modalData.venue}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-2">
                  <label
                    className="block font-semibold mb-2"
                    htmlFor="event-image"
                  >
                    Image Url:
                  </label>
                  <input
                    className="w-full border rounded py-2 px-3 mb-3"
                    type="text"
                    id="event-image"
                    name="image"
                    required
                    value={modalData.image}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-2">
                  <label
                    className="block font-semibold mb-2"
                    htmlFor="event-rules"
                  >
                    Description:
                  </label>
                  <textarea
                    rows={3}
                    className="w-full border rounded py-2 px-3 mb-3"
                    id="event-description"
                    name="description"
                    required
                    value={modalData.description}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="flex justify-center col-span-2 text-center pt-2">
                  <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={
                      operationType === "CREATE"
                        ? handleCreateEvent
                        : handleUpdateEvent
                    }
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Submitting..."
                      : operationType === "CREATE"
                      ? "Create"
                      : "Update"}
                  </button>
                  <button
                    type="button"
                    className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded ml-2"
                    onClick={handleClose}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default EventModal;
