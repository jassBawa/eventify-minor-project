import { getAdminEvents } from "@/services/api";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useEvents = (showModal, isDeleteModal) => {
  const [events, setEvents] = useState([]);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    console.log("fetching events again", showModal);

    const fetchEvents = async () => {
      try {
        const response = await getAdminEvents(token);
        console.log(response);
        setEvents(response);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, [showModal, token, isDeleteModal]);

  return events;
};

export default useEvents;
